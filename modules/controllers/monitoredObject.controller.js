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
            error: error.messages
        })
    }
}

exports.getDetailMonitoredObject = async (req, res) => {
    try {
        const monitoredObject = await MonitoredObjectService.getDetailMonitoredObject(req.params.id);

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
            error: err.messages
        })
    }
}

exports.createMonitoredObject = async (req, res) => {
    try {
        const monitoredObject = await MonitoredObjectService.createMonitoredObject(req.body);

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
            errors: err.messages
        })
    }
}

exports.editMonitoredObject = async (req, res) => {
    try {
        console.log(req.params.id);
        const monitoredObject = await MonitoredObjectService.editMonitoredObject(req.params.id, req.body);

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
            errors: err.messages
        })
    }
}

exports.deleteManyMonitoredObjects = async (req, res) => {
    try {
        const monitoredObjects = await MonitoredObjectService.deleteManyMonitoredObjects(req.body.arrayId);

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
            errors: err.messages
        })
    }
}

exports.getMonitoredObjectsByZone = async (req, res) => {
    try {
        const monitoredObjects = await MonitoredObjectService.getMonitoredObjectsByZone(req.query);
        
        res.status(200).json({
            success: true,
            messages: "Lấy đối tượng giám sát theo miền thành công",
            content: monitoredObjects
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Lấy đối tượng giám sát theo miền thất bại",
            errors: err.messages
        })
    }
}

exports.getMonitoredObjectsByType = async (req, res) => {
    try {
        const monitoredObjects = await MonitoredObjectService.getMonitoredObjectsByType(req.query);
        
        res.status(200).json({
            success: true,
            messages: "Lấy đối tượng giám sát theo loại thành công",
            content: monitoredObjects
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Lấy đối tượng giám sát theo loại thất bại",
            errors: err.messages
        })
    }
}