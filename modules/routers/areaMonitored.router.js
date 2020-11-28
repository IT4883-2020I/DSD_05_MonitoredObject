const express = require('express');
const router = express.Router();
const AreaMonitoredController = require('../controllers/areaMonitored.controller');
const { auth } = require('../../middlewares');

router.get('/', AreaMonitoredController.getAlllAreaMonitored);
router.post('/', AreaMonitoredController.createAreaMonitored);
router.post('/delete-many-area-monitored', AreaMonitoredController.deleteAreaMonitored);
router.patch('/:id', AreaMonitoredController.editAreaMonitored);
// router.get('/detail-monitored-object/:id', CategoryMonitoredObjectController.);

module.exports = router