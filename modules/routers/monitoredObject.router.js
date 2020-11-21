const express = require('express');
const router = express.Router();
const MonitoredObjectController = require('../controllers/monitoredObject.controller');

router.get('/', MonitoredObjectController.getAllMonitoredObject);

module.exports = router;