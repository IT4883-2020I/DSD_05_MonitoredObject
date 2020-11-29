const AreaMonitoredService = require('../services/areaMonitored.service');

exports.getAlllAreaMonitored = async (req, res) => {
    try {
        const areaMonitored = await AreaMonitoredService.getAllAreaMonitored(req.query);

        res.status(200).json({
            success: true,
            messages: "lấy danh sách khu vực giám sát thành công",
            content: areaMonitored
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Lấy danh sách khu vực giám sát thất bại",
            error: err
        })
    }
}

exports.createAreaMonitored = async (req, res) => {
    try {
        const areaMonitored = await AreaMonitoredService.createAreaMonitored(req.body);

        res.status(200).json({
            success: true,
            messages: "Tạo khu vực giám sát thành công",
            content: areaMonitored
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Tạo khu vực giám sát thất bại",
            error: err
        })
    }
}

exports.editAreaMonitored = async (req, res) => {
    try {
        const areaMonitored = await AreaMonitoredService.editAreaMonitored(req.params.id, req.body);

        res.status(200).json({
            success: true,
            messages: "Sửa khu vực giám sát thành công",
            content: areaMonitored
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Sửa khu vực giám sát thất bại",
            error: err
        })
    }
}

exports.deleteAreaMonitored = async (req, res) => {
    try {
        const arrayId = await AreaMonitoredService.deleteAreaMonitoreds(req.body.arrayId);

        res.status(200).json({
            success: true,
            messages: "Xóa khu vực giám sát thành công",
            content: arrayId
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            messages: "Xóa khu vực giám sát thất bại",
            error: err
        })
    }
}