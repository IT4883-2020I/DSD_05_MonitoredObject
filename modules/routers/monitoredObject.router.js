const express = require('express');
const router = express.Router();
const MonitoredObjectController = require('../controllers/monitoredObject.controller');
const { auth } = require('../../middlewares');

router.get('/', auth, MonitoredObjectController.getAllMonitoredObject);
router.post('/', auth, MonitoredObjectController.createMonitoredObject);
router.post('/delete-many-monitored-objects', auth, MonitoredObjectController.deleteManyMonitoredObjects);
router.patch('/:id', auth, MonitoredObjectController.editMonitoredObject);
router.get('/detail-monitored-object/:id', auth, MonitoredObjectController.getDetailMonitoredObject);

module.exports = router