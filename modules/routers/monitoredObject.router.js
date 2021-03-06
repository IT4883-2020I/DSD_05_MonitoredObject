const express = require('express');
const router = express.Router();
const MonitoredObjectController = require('../controllers/monitoredObject.controller');
const { auth } = require('../../middlewares');

router.get('/', MonitoredObjectController.getAllMonitoredObject);
router.get('/get-object-by-zone', MonitoredObjectController.getMonitoredObjectsByZone);
router.get('/get-object-by-type', MonitoredObjectController.getMonitoredObjectsByType);
router.get('/get-object-by-category', MonitoredObjectController.getMonitoredObjectsByCategory);
router.post('/', MonitoredObjectController.createMonitoredObject);
router.post('/delete-many-monitored-objects', MonitoredObjectController.deleteManyMonitoredObjects);
router.patch('/:id', MonitoredObjectController.editMonitoredObject);
router.get('/detail-monitored-object/:id', MonitoredObjectController.getDetailMonitoredObject);

module.exports = router