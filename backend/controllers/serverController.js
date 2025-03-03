const { Server } = require('../models');
const { createFactorioContainer, docker } = require('../utils/docker');
const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');
const {
  getAvailableVersions,
  isValidVersion,
} = require('../utils/factorioVersions');
const { getSystemInfo } = require('../services/monitoring/systemInfo');
const Rcon = require('rcon');

const listVersions = async (req, res) => {
  // TODO: Replace hard-coded versions with data from Factorio API
  try {
    const versions = [
      'latest',
      '2.0.36',
      '2.0.35',
      '2.0.34',
      '2.0.33',
      '2.0.32',
      '2.0.31',
      '2.0.30',
      '2.0.29',
      '2.0.28',
      '2.0.27',
      '2.0.26',
      '2.0.25',
      '2.0.24',
      '2.0.23',
      '2.0.22',
      '2.0.21',
      '2.0.20',
      '2.0.19',
      '2.0.18',
      '2.0.17',
      '2.0.16',
      '2.0.15',
      '2.0.14',
      '2.0.13',
      '2.0.12',
      '2.0.11',
      '2.0.10',
      '2.0.9',
      '2.0.8',
      '2.0.7',
      '1.1.110',
      '1.1.109',
      '1.1.108',
      '1.1.107',
      '1.1.106',
      '1.1.105',
      '1.1.104',
      '1.1.103',
      '1.1.102',
      '1.1.101',
      '1.1.100',
      '1.1.99',
      '1.1.98',
      '1.1.97',
      '1.1.96',
      '1.1.95',
      '1.1.94',
      '1.1.93',
      '1.1.92',
      '1.1.91',
      '1.1.90',
      '1.1.89',
      '1.1.88',
      '1.1.87',
      '1.1.86',
      '1.1.69',
      '1.1.60',
      '1.1.59',
      '1.1.58',
      '1.1.57',
      '1.0.0',
    ];
    res.json(versions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const pullVersion = async (req, res) => {
  try {
    const { version } = req.body;
    // Pull the specified Docker image version for Factorio
    const stream = await docker.pull(`factoriotools/factorio:${version}`);

    // Wait for the pull operation to complete
    await new Promise((resolve, reject) => {
      docker.modem.followProgress(stream, (err) =>
        err ? reject(err) : resolve(),
      );
    });

    res.json({ message: `Successfully pulled version ${version}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const startServer = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) return res.status(404).json({ error: 'Server not found' });

    const containerName = `factorio-${server.id}`;
    let container = docker.getContainer(containerName);

    // Check if the container is running; if not, start it and update the DB status
    const containerState = await container.inspect();
    if (!containerState.State.Running) {
      await container.start();
      await server.update({ status: 'running' });
      res.json({ message: 'Server started' });
    } else {
      res.status(400).json({ error: 'Server already running' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const stopServer = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) return res.status(404).json({ error: 'Server not found' });

    const containerName = `factorio-${server.id}`;
    let container = docker.getContainer(containerName);

    // Check if the container is running; if so, stop it and update the DB status
    const containerState = await container.inspect();
    if (containerState.State.Running) {
      await container.stop();
      await server.update({ status: 'stopped' });
      res.json({ message: 'Server stopped' });
    } else {
      res.status(400).json({ error: 'Server already stopped' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteServer = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) return res.status(404).json({ error: 'Server not found' });

    const containerName = `factorio-${server.id}`;
    let container = docker.getContainer(containerName);

    try {
      // Verify container exists and then stop (if running) and remove it
      await container.inspect();
      const containerState = await container.inspect();
      if (containerState.State.Running) {
        await container.stop();
      }
      await container.remove();
    } catch (err) {
      // If container not found, ignore, otherwise, propagate error
      if (err.statusCode !== 404) {
        return res
          .status(500)
          .json({
            error: 'Error stopping or removing container',
            details: err.message,
          });
      }
    }

    // Remove the server entry from the database
    await server.destroy();

    res.json({ message: 'Server deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Revert saves directory to backup_saves contents
// const revertToBackupSaves = async (savesDir, backupDir) => {
//   const saveFiles = await fs.readdir(savesDir);
//   for (const file of saveFiles) {
//     const fullPath = path.join(savesDir, file);
//     const stats = await fs.stat(fullPath);
//     if (stats.isFile()) {
//       await fs.unlink(fullPath);
//     }
//   }

//   try {
//     const backupFiles = await fs.readdir(backupDir);
//     for (const file of backupFiles) {
//       const srcPath = path.join(backupDir, file);
//       const destPath = path.join(savesDir, file);
//       const stats = await fs.stat(srcPath);
//       if (stats.isFile()) {
//         await fs.copyFile(srcPath, destPath);
//       }
//     }
//     return true;
//   } catch (error) {
//     if (error.code === 'ENOENT') return false;
//     throw error;
//   }
// };

const stopServerContainer = async (server, docker) => {
  const containerName = `factorio-${server.id}`;
  const container = docker.getContainer(containerName);
  const containerState = await container.inspect();
  if (containerState.State.Running) {
    await container.stop();
    await server.update({ status: 'stopped' });
    return true;
  }
  return false;
};

const startServerContainer = async (server, docker) => {
  const containerName = `factorio-${server.id}`;
  const container = docker.getContainer(containerName);
  const containerState = await container.inspect();

  if (!containerState.State.Running) {
    console.log(`Starting container ${containerName}`);
    await container.start();
    await server.update({ status: 'running' });
    return true;
  }
  return false;
};

const uploadSave = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) return res.status(404).json({ error: 'Server not found' });
    if (!req.files || !req.files.save)
      return res.status(400).json({ error: 'No save file uploaded' });

    const wasRunning = await stopServerContainer(server, docker);

    const saveFile = req.files.save;
    const savesDir = path.resolve(
      __dirname,
      `../../servers/${server.id}/saves`,
    );
    const backupDir = path.join(savesDir, 'backup_saves');

    // Create backup_saves directory if it doesn’t exist
    await fsPromises.mkdir(backupDir, { recursive: true });

    // Move existing files to backup_saves
    const files = await fsPromises.readdir(savesDir);
    for (const file of files) {
      const fullPath = path.join(savesDir, file);
      const stats = await fsPromises.stat(fullPath);
      if (stats.isFile()) {
        await fsPromises.rename(fullPath, path.join(backupDir, file));
      }
    }

    // Upload new save file
    const savePath = path.join(savesDir, saveFile.name);
    await saveFile.mv(savePath);

    // Start the server if it was running before
    if (wasRunning) {
      await startServerContainer(server, docker);
    }

    console.log('Upload completed');
    return res.json({ message: 'Save file uploaded successfully' });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: error.message });
  }
};

const updateServerSettings = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    const { dlcEnabled, offlineMode } = req.body;

    // Update server settings in the database with provided values, preserving existing settings if not specified
    await server.update({
      dlcEnabled: dlcEnabled !== undefined ? dlcEnabled : server.dlcEnabled,
      offlineMode: offlineMode !== undefined ? offlineMode : server.offlineMode,
      serverSettings: {
        ...server.serverSettings,
        require_user_verification: !offlineMode,
        visibility: {
          ...server.serverSettings.visibility,
          public: offlineMode ? false : server.serverSettings.visibility.public,
        },
      },
    });

    // Persist updated settings to the server's configuration file
    const settingsPath = path.join(
      __dirname,
      `../../servers/${server.id}/config/server-settings.json`,
    );
    fs.writeFileSync(
      settingsPath,
      JSON.stringify(server.serverSettings, null, 2),
    );

    res.json(server);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Helper function to gather all used UDP ports from running Docker containers
const getUsedPorts = async () => {
  const containers = await docker.listContainers({ all: true });
  const usedPorts = new Set();

  containers.forEach((container) => {
    if (container.Ports) {
      container.Ports.forEach((portInfo) => {
        if (portInfo.PublicPort) {
          usedPorts.add(portInfo.PublicPort);
        }
      });
    }
  });
  return usedPorts;
};

// Find the first available port within the given range
const findAvailablePort = async (minPort = 30000, maxPort = 40000) => {
  const usedPorts = await getUsedPorts();
  for (let port = minPort; port <= maxPort; port++) {
    if (!usedPorts.has(port)) {
      return port;
    }
  }

  throw new Error('No available ports found in range!');
};

const createServer = async (req, res) => {
  console.log('Received POST /servers request:', req.body);
  let server = null;
  try {
    let {
      name,
      vcpus,
      memory,
      storage,
      port,
      version = 'latest',
      dlcEnabled = true,
      offlineMode = true,
      rconPort,
      rconPassword,
    } = req.body;

    if (!port) {
      port = await findAvailablePort(30000, 40000);
    }

    if (rconPassword && !rconPort) {
      rconPort = await findAvailablePort(40001, 50000);
    }

    let versionExists = await isValidVersion(version);
    if (!versionExists) {
      console.log(
        `Version ${version} not found locally, attempting to pull...`,
      );
      const stream = await docker.pull(`factoriotools/factorio:${version}`);
      await new Promise((resolve, reject) => {
        docker.modem.followProgress(stream, (err) =>
          err ? reject(err) : resolve(),
        );
      });
      versionExists = await isValidVersion(version);
      if (!versionExists) {
        throw new Error(`Version ${version} not found after pull`);
      }
    }

    server = await Server.create({
      name,
      vcpus,
      memory,
      storage,
      port,
      version,
      dlcEnabled,
      offlineMode,
      rconPort,
      rconPassword,
      status: 'stopped',
    });

    const serverPath = path.resolve(__dirname, `../../servers/${server.id}`);
    const configPath = path.join(serverPath, 'config');
    const savesPath = path.join(serverPath, 'saves');

    fs.mkdirSync(configPath, { recursive: true });
    fs.mkdirSync(savesPath, { recursive: true });

    const serverSettings = {
      name: name || 'My Factorio Server',
      description: 'Factory Must Grow!',
      max_players: 100,
      visibility: { public: false, lan: true },
      require_user_verification: false,
      username: '',
      password: '',
      token: '',
      game_password: '',
      allow_commands: 'admins-only',
      autosave_interval: 10,
      autosave_slots: 5,
    };

    fs.writeFileSync(
      path.join(configPath, 'server-settings.json'),
      JSON.stringify(serverSettings, null, 2),
    );

    // Write RCON password to config/rconpw if provided
    if (rconPassword) {
      const rconPwPath = path.join(configPath, 'rconpw');
      fs.writeFileSync(rconPwPath, rconPassword);
      console.log(`RCON password written to ${rconPwPath}`);
    }

    const container = await createFactorioContainer(server, serverPath);
    await container.start();

    await server.update({ status: 'running' });

    res.status(201).json(server);
  } catch (error) {
    if (server) {
      await server.destroy();
      const serverPath = path.resolve(__dirname, `../../servers/${server.id}`);
      if (fs.existsSync(serverPath)) {
        fs.rmSync(serverPath, { recursive: true, force: true });
      }
    }
    console.error('createServer error:', error);
    res.status(500).json({ error: error.message, details: error.stack });
  }
};
const sendRconCommand = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) return res.status(404).json({ error: 'Server not found' });

    if (!server.rconPort || !server.rconPassword) {
      return res
        .status(400)
        .json({ error: 'RCON is not enabled for this server' });
    }

    const { command } = req.body;
    if (!command) return res.status(400).json({ error: 'Command is required' });

    const container = docker.getContainer(`factorio-${server.id}`);
    const containerState = await container.inspect();
    if (!containerState.State.Running) {
      return res.status(400).json({ error: 'Server is not running' });
    }

    const rcon = new Rcon('localhost', server.rconPort, server.rconPassword);
    let timeoutId;

    rcon
      .on('auth', () => {
        console.log('RCON authenticated');
        rcon.send(command);
      })
      .on('response', (response) => {
        console.log('RCON response:', response);
        clearTimeout(timeoutId); // Prevent timeout from sending another response
        res.json({ response });
        rcon.disconnect();
      })
      .on('error', (err) => {
        console.error('RCON error:', err.message);
        clearTimeout(timeoutId); // Prevent timeout on error
        if (!res.headersSent) {
          res.status(500).json({ error: 'RCON error', details: err.message });
        }
        rcon.disconnect();
      })
      .on('end', () => {
        console.log('RCON connection closed');
      });

    console.log(`Attempting RCON connection to localhost:${server.rconPort}`);
    rcon.connect();

    timeoutId = setTimeout(() => {
      if (!rcon.hasAuthed) {
        if (!res.headersSent) {
          res.status(500).json({ error: 'RCON connection timed out' });
        }
        rcon.disconnect();
      }
    }, 5000); // 5-second timeout
  } catch (error) {
    console.error('sendRconCommand error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
};
const getServerLogs = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) {
      res.status(404).json({ error: 'Server not found' });
      return;
    }

    const container = docker.getContainer(`factorio-${server.id}`);
    const logStream = await container.logs({
      follow: true,
      stdout: true,
      stderr: true,
      timestamps: true,
      tail: 100,
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    logStream.on('data', (chunk) => {
      if (!res.writableEnded) {
        let message = chunk.toString();
        message = message.replace(/^([^0-9]*)(\d{4}-\d{2}-\d{2}T)/, '$2');
        message = message.replace(/[^\x09\x0A\x0D\x20-\x7E]+/g, '');

        const formattedMessage = `data: ${message}\n\n`;
        // console.log(`[Server ${server.id} Logs] ${formattedMessage}`);
        res.write(formattedMessage);
      }
    });

    logStream.on('end', () => {
      if (!res.writableEnded) {
        // console.log(`Log stream ended for server ${server.id}`);
        res.end();
      }
    });

    logStream.on('error', (err) => {
      // console.error(`Log stream error for server ${server.id}:`, err);
      if (!res.writableEnded) {
        res.status(500).write(`Log stream error: ${err.message}`);
        res.end();
      }
    });

    req.on('close', () => {
      logStream.destroy();
      // console.log(`Client disconnected, log stream closed for server ${server.id}`);
    });
  } catch (error) {
    // console.error('getServerLogs error:', error);
    if (!res.writableEnded && !res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
};
const listServers = async (req, res) => {
  try {
    const servers = await Server.findAll();

    // Retrieve all Docker containers (including stopped ones) to determine current container statuses
    const containers = await docker.listContainers({ all: true });
    const containerMap = new Map(
      containers.map((c) => [c.Names[0].replace(/^\//, ''), c.Status]),
    );

    const updatedServers = await Promise.all(
      servers.map(async (server) => {
        const containerName = `factorio-${server.id}`;

        const containerState = containerMap.get(containerName);

        // Determine if the container is running by checking if its status string starts with 'Up'
        let isRunning = false;
        if (containerState) {
          isRunning = containerState.startsWith('Up');
        }

        // Update server status in the DB if it does not match the actual container state
        if (server.status === 'running' && !isRunning) {
          await server.update({ status: 'stopped' });
          server.status = 'stopped';
        } else if (server.status === 'stopped' && isRunning) {
          await server.update({ status: 'running' });
          server.status = 'running';
        }

        return server;
      }),
    );

    res.json(updatedServers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServerDetails = async (req, res) => {
  try {
    // Search server by name
    const server = await Server.findOne({ where: { name: req.params.name } });
    if (!server) {
      return res.status(404).json({ error: 'Server not found' });
    }
    res.json(server);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSystemStats = async (req, res) => {
  try {
    const stats = await getSystemInfo();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching system stats:', error);
    res.status(245).json({ error: 'Failed to retrieve system information' });
  }
};

const getServerStats = async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (!server) return res.status(404).json({ error: 'Server not found' });

    let stats = {};
    try {
      const containerName = `factorio-${server.id}`;
      let container = docker.getContainer(containerName);
      const inspectData = await container.inspect();
      const containerRunning = inspectData.State.Running;

      // Sync the DB server status with the container state
      if (containerRunning && server.status !== 'running') {
        await server.update({ status: 'running' });
        stats.status = 'running';
      } else if (!containerRunning && server.status !== 'stopped') {
        await server.update({ status: 'stopped' });
      } else {
        stats.status = server.status;
      }

      // If the container is running, fetch detailed statistics
      if (containerRunning) {
        const statsData = await container.stats({ stream: false });
        const cpuPercent = calculateCpuUsage(statsData);
        stats = {
          ...stats,
          cpuUsage: cpuPercent,
          memoryUsage: statsData.memory_stats.usage / 1024 / 1024,
          memoryLimit: statsData.memory_stats.limit / 1024 / 1024,
          networkUsage: statsData.networks ? statsData.networks.eth0 : null,
        };
      }
    } catch (dockerError) {
      console.error('Docker stats error:', dockerError);
    }

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Helper function to calculate CPU usage percentage from Docker stats
function calculateCpuUsage(stats) {
  const prevCpu = stats.precpu_stats.cpu_usage.total_usage;
  const currCpu = stats.cpu_stats.cpu_usage.total_usage;

  const prevSystem = stats.precpu_stats.system_cpu_usage;
  const currSystem = stats.cpu_stats.system_cpu_usage;

  const numCpus = stats.cpu_stats.online_cpus || 1;

  const cpuDelta = currCpu - prevCpu;
  const systemDelta = currSystem - prevSystem;

  if (cpuDelta > 0 && systemDelta > 0) {
    return ((cpuDelta / systemDelta) * numCpus * 100).toFixed(2);
  }

  return '0.00';
}

module.exports = {
  createServer,
  startServer,
  stopServer,
  deleteServer,
  uploadSave,
  listServers,
  listVersions,
  pullVersion,
  updateServerSettings,
  getServerDetails,
  getServerStats,
  getSystemStats,
  sendRconCommand,
  getServerLogs,
};
