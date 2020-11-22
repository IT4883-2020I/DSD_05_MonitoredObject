const  { MonitoredObject, CategoryMonitoredObject, AreaMonitored }  =  require('../../models');

exports.getAllMonitoredObject = async (query) => {
    const { limit, page } = query;
    if(!page || !limit) {
        const monitored = await MonitoredObject
            .find()
            .populate([
                { path: 'parent' },
                { path: 'areaMonitored', model: AreaMonitored },
                { path: 'category', model: CategoryMonitoredObject },
            ])
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
            populate: [
                { path: 'parent' },
                { path: 'areaMonitored', model: AreaMonitored },
                { path: 'category', model: CategoryMonitoredObject },
            ]
        })
    }
}

exports.getDetailMonitoredObject = async (id) => {
    const monitoredObject = await MonitoredObject.findById(id)
        .populate([
            { path: 'parent' },
            { path: 'areaMonitored', model: AreaMonitored },
            { path: 'category', model: CategoryMonitoredObject },
        ])

    return monitoredObject;
}

exports.createMonitoredObject = async (data) => {
    let query = {
        parent: data.parent,
        areaMonitored: data.areaMonitored,
        category: data.category,
        code: data.code,
        name: data.name,
        status: data.status,
        description: data.description,
    }

    const monitoredObject = await MonitoredObject.create(query);

    return await MonitoredObject.findById(monitoredObject._id)
        .populate([
            { path: 'parent' },
            { path: 'areaMonitored', model: AreaMonitored },
            { path: 'category', model: CategoryMonitoredObject },
        ])
}

exports.editMonitoredObject = async (id, data) => {
    
    let monitoredObject = await MonitoredObject.findById(id);

    monitoredObject.parent = data.parent ? data.parent : monitoredObject.parent;
    monitoredObject.areaMonitored = data.areaMonitored ? data.areaMonitored : monitoredObject.areaMonitored;
    monitoredObject.category = data.category ? data.category : monitoredObject.category;
    monitoredObject.code = data.code ? data.code : monitoredObject.code;
    monitoredObject.name = data.name ? data.name : monitoredObject.name;
    monitoredObject.status = data.status ? data.status : monitoredObject.status;
    monitoredObject.description = data.description ? data.description : monitoredObject.description;

    await monitoredObject.save();

    return await MonitoredObject.findById(id)
        .populate([
            { path: 'parent' },
            { path: 'areaMonitored', model: AreaMonitored },
            { path: 'category', model: CategoryMonitoredObject },
        ])
}

exports.deleteManyMonitoredObjects = async (arrayId) => {
    for (let i = 0; i < arrayId.length; i++) {
        await MonitoredObject.deleteOne({ _id: arrayId[i] });
    }

    return arrayId;
}