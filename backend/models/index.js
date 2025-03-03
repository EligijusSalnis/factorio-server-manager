const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  logging: false,
  storage: dbPath,
});

// Server model
const Server = sequelize.define('Server', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM('stopped', 'running'),
    defaultValue: 'stopped',
  },
  dlcEnabled: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  offlineMode: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  version: {
    type: Sequelize.STRING,
    defaultValue: 'latest',
    allowNull: false,
  },
  rconPort: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  rconPassword: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  vcpus: Sequelize.INTEGER,
  memory: Sequelize.STRING,
  storage: Sequelize.STRING,
  port: Sequelize.INTEGER,
  activeSave: Sequelize.STRING,
  serverSettings: {
    type: Sequelize.JSON,
    defaultValue: {
      require_user_verification: false,
      visibility: {
        public: false,
        lan: true,
      },
    },
  },
});

// Sync database
async function syncDatabase() {
  const dbExists = fs.existsSync(dbPath);
  try {
    if (!dbExists) {
      console.log('Database does not exist. Creating fresh database...');
      await sequelize.sync({ force: true });
      console.log('Database exists. Altering tables if needed...');
      await sequelize.sync({ alter: true });
    }
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Database sync error:', error);
  }
}

syncDatabase();

module.exports = { Server, sequelize };
