const  MonitoredObject  =  require('../../models/monitoredObject.model');

exports.getAllMonitoredObject = async (query) => {
    const { limit, page } = query;
    if(!page || !limit) {
        const monitored = await MonitoredObject.find();
        return monitored;
    } else {
        let option = {};

        if(query.code) {
            option.code = new RegExp(query.code, 'i');
        }

        if(query.name) {
            option.name = new RegExp(query.name, 'i');
        }

        return await MonitoredObject
            .paginate(option, {
            limit,
            page,
        })
    }
}