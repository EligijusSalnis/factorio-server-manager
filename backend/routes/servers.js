const express = require('express');
const router = express.Router();
const controller = require('../controllers/serverController');
const { validateServerCreation } = require('../middlewares/serverValidation');

router.get('/system-stats', controller.getSystemStats);
router.get('/versions', controller.listVersions);
router.post('/versions/pull', controller.pullVersion);

router.post('/', validateServerCreation, controller.createServer);
router.post('/:id/start', controller.startServer);
router.post('/:id/stop', controller.stopServer);
router.post('/:id/delete', controller.deleteServer);
router.post('/:id/upload', controller.uploadSave);
router.post('/:id/settings', controller.updateServerSettings);
router.post('/:id/rcon', controller.sendRconCommand);

router.get('/', controller.listServers);
router.get('/:id', controller.getServerDetails);
router.get('/:id/stats', controller.getServerStats);
router.get('/:id/logs', controller.getServerLogs);

module.exports = router;
