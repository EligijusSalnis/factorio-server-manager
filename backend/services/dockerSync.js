const { Server } = require('../models/index.js');
const { docker } = require('../utils/docker');
const cron = require('node-cron');

const syncDockerWithDatabase = async () => {
  try {
    const containers = await docker.listContainers({ all: true });
    const activeContainerNames = new Set(
      containers.map((container) => container.Names[0].replace(/^\//, '')),
    );

    const servers = await Server.findAll();

    for (const server of servers) {
      const containerName = `factorio-${server.id}`;

      if (!activeContainerNames.has(containerName)) {
        console.log(
          `Removing server ${server.id} from database (no matching container)`,
        );
        await server.destroy();
      }
    }
  } catch (error) {
    console.error('Error syncing containers with database:', error);
  }
};

//Repeat every 10 minutes.
cron.schedule('*/10 * * * *', syncDockerWithDatabase);

module.exports = { syncDockerWithDatabase };
