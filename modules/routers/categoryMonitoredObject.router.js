const express = require('express');
const router = express.Router();
const CategoryMonitoredObjectController = require('../controllers/categoryMonitoredObject.controller');
const { auth } = require('../../middlewares');

router.get('/', CategoryMonitoredObjectController.getAlllCategoryMonitoredObject);
router.get('/category-by-type', CategoryMonitoredObjectController.getCategoryByType);
router.post('/', CategoryMonitoredObjectController.createCategoryMonitoredObject);
router.post('/delete-many-category-monitored-objects', CategoryMonitoredObjectController.deleteCategoryMonitoredObject);
router.patch('/:id', CategoryMonitoredObjectController.editCategoryMonitoredObject);
// router.get('/detail-monitored-object/:id', CategoryMonitoredObjectController.);

module.exports = router