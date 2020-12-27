const CategoryMonitoredObjectService = require('../services/categoryMonitoredObject.service');

exports.getAlllCategoryMonitoredObject = async (req, res) => {
    try {
        const categories = await CategoryMonitoredObjectService.getAlllCategoryMonitoredObject(req.query);

        res.status(200).json({
            success: true,
            messages: "lấy danh sách danh mục đối tượng thành công",
            content: categories
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Lấy danh sách danh mục đối tượng thất bại",
            error: err.messages
        })
    }
}

exports.createCategoryMonitoredObject = async (req, res) => {
    try {
        const category = await CategoryMonitoredObjectService.createCategoryMonitoredObject(req.body);

        res.status(200).json({
            success: true,
            messages: "Tạo danh mục đối tượng thành công",
            content: category
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Tạo danh mục đối tượng thất bại",
            error: err.messages
        })
    }
}

exports.editCategoryMonitoredObject = async (req, res) => {
    try {
        const category = await CategoryMonitoredObjectService.editCategoryMonitoredObject(req.params.id, req.body);

        res.status(200).json({
            success: true,
            messages: "Sửa danh mục đối tượng thành công",
            content: category
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Sửa danh mục đối tượng thất bại",
            error: err.messages
        })
    }
}

exports.deleteCategoryMonitoredObject = async (req, res) => {
    try {
        const arrayId = await CategoryMonitoredObjectService.deleteCategoryMonitoredObject(req.body.arrayId);

        res.status(200).json({
            success: true,
            messages: "Xóa danh mục đối tượng thành công",
            content: arrayId
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Xóa danh mục đối tượng thất bại",
            error: err.messages
        })
    }
}

exports.getCategoryByType = async (req, res) => {
    try {
        const categories = await CategoryMonitoredObjectService.getCategoryByType(req.query);

    res.status(200).json({
            success: true,
            messages: "Lấy danh mục đối tượng thành công",
            content: categories
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Lấy danh mục đối tượng thất bại",
            error: err.messages
        })
    }
}