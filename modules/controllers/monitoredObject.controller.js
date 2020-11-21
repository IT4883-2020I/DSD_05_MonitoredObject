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
        console.log(error);
        res.status(400).json({
            success: false,
            messages: "Lấy dữ liệu đối tượng giám sát thất bại",
            error: error
        })
    }
}