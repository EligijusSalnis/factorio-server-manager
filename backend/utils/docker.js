const Docker = require('dockerode');
// const dockerQueue = new Queue('docker-ops');
// const Queue = require('bull');
const path = require('path');
require('dotenv').config();

const socketPath = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
const docker = new Docker({ socketPath });

// dockerQueue.process(async (job) => { //TODO: Implement it
//   switch (job.data.action) {
//     case 'start':
//       return startContainer(job.data.serverId);
//     case 'stop':
//       return stopContainer(job.data.serverId);
//   }
// });

const createFactorioContainer = async (server, serverPath) => {
  const envVariables = [];

  if (server.offlineMode) {
    envVariables.push(
      'FACTORIO_ALLOW_NO_TOKEN=1',
      'FACTORIO_REQUIRE_USER_VERIFICATION=0',
    );
  }

  if (server.dlcEnabled) {
    envVariables.push('FACTORIO_DLC_ENABLE=space-age');
  }

  // Add RCON configuration if enabled
  if (server.rconPassword) {
    envVariables.push(`RCON_PASSWORD=${server.rconPassword}`);
  }

  const hostConfig = {
    Memory: parseInt(server.memory) * 1024 * 1024,
    MemorySwap: parseInt(server.memory) * 1024 * 1024,
    CpuShares: server.vcpus * 1024,
    PortBindings: {
      '34197/udp': [{ HostPort: `${server.port}` }], // Game port
    },
    Binds: [
      `${path.resolve(serverPath, 'saves')}:/factorio/saves`,
      `${path.resolve(serverPath, 'config')}:/factorio/config`,
    ],
    RestartPolicy: {
      Name: 'on-failure',
      MaximumRetryCount: 3,
    },
  };

  if (server.rconPort) {
    hostConfig.PortBindings['27015/tcp'] = [{ HostPort: `${server.rconPort}` }];
  }

  console.log('Creating container with configuration:', {
    Image: `factoriotools/factorio:${server.version}`,
    Env: envVariables,
    HostConfig: hostConfig,
  });

  return docker.createContainer({
    name: `factorio-${server.id}`,
    Image: `factoriotools/factorio:${server.version}`,
    Env: envVariables,
    HostConfig: hostConfig,
  });
};

module.exports = {
  docker,
  createFactorioContainer,
};
