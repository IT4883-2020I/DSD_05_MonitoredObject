const express = require('express');
const router = express.Router();
const AreaMonitoredController = require('../controllers/areaMonitored.controller');
const { auth } = require('../../middlewares');

router.get('/', auth, AreaMonitoredController.getAlllAreaMonitored);
router.post('/', auth, AreaMonitoredController.createAreaMonitored);
router.post('/delete-many-area-monitored', auth, AreaMonitoredController.deleteAreaMonitored);
router.patch('/:id', auth, AreaMonitoredController.editAreaMonitored);
// router.get('/detail-monitored-object/:id', CategoryMonitoredObjectController.);

module.exports = router