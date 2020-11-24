const express = require('express');
const router = express.Router();
const CategoryMonitoredObjectController = require('../controllers/categoryMonitoredObject.controller');
const { auth } = require('../../middlewares');

router.get('/', auth, CategoryMonitoredObjectController.getAlllCategoryMonitoredObject);
router.post('/', auth, CategoryMonitoredObjectController.createCategoryMonitoredObject);
router.post('/delete-many-category-monitored-objects', auth, CategoryMonitoredObjectController.deleteCategoryMonitoredObject);
router.patch('/:id', auth, CategoryMonitoredObjectController.editCategoryMonitoredObject);
// router.get('/detail-monitored-object/:id', CategoryMonitoredObjectController.);

module.exports = router