const express = require('express');
const router = express.Router();
const MonitoredObjectController = require('../controllers/monitoredObject.controller');

router.get('/', MonitoredObjectController.getAllMonitoredObject);
router.post('/', MonitoredObjectController.createMonitoredObject);
router.post('/delete-many-monitored-objects', MonitoredObjectController.deleteManyMonitoredObjects);
router.patch('/:id', MonitoredObjectController.editMonitoredObject);
router.get('/detail-monitored-object/:id', MonitoredObjectController.getDetailMonitoredObject);

module.exports = router