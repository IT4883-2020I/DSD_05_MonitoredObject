const MonitoredObjectService = require('../services/monitorObject.service');

exports.getAllMonitoredObject = async (req, res) => {
    try {
        const monitored = await MonitoredObjectService.getAllMonitoredObject(req.query);
        res.status(200).json({
            success: true,
            messages: "Lấy dữ liệu đối tượng giám sát thành công",
            content: monitored
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            messages: "Lấy dữ liệu đối tượng giám sát thất bại",
            error: error
        })
    }
}

exports.getDetailMonitoredObject = async (req, res) => {
    try {
        const monitoredObject = MonitoredObjectService.getDetailMonitoredObject(req.params.id);

        res.status(200).json({
            success: true,
            messages: "lấy chi tiết đối tượng giám sát thành công",
            content: monitoredObject
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Lấy chi tiết đối tượng giám sát thất bại",
            error: err
        })
    }
}

exports.createMonitoredObject = async (req, res) => {
    try {
        const monitoredObject = MonitoredObjectService.createMonitoredObject(req.body);

        res.status(200).json({
            success: true,
            messages: "Tạo mới đối tượng giám sát thành công",
            content: monitoredObject
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Tạo mới đối tượng giám sát thất bại",
            errors: err
        })
    }
}

exports.editMonitoredObject = async (req, res) => {
    try {
        console.log(req.params.id);
        const monitoredObject = MonitoredObjectService.editMonitoredObject(req.params.id, req.body);

        res.status(200).json({
            success: true,
            messages: "Sửa đối tượng giám sát thành công",
            content: monitoredObject
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Sửa đối tượng giám sát thất bại",
            errors: err
        })
    }
}

exports.deleteManyMonitoredObjects = async (req, res) => {
    try {
        const monitoredObjects = MonitoredObjectService.deleteManyMonitoredObjects(req.params.arrayId);

        res.status(200).json({
            success: true,
            messages: "Xóa đối tượng giám sát thành công",
            content: monitoredObjects
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Xóa đối tượng giám sát thất bại",
            errors: err
        })
    }
}