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

        if(query.status) {
            option.status = query.status;
        }

        if(query.managementUnit) {
            option.managementUnit = query.managementUnit
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
        lat: data.lat,
        lng: data.lng,
        height: data.height,
        monitoredZone: data.monitoredZone,
        managementUnit: data.managementUnit,
        images: data.images,
        videos: data.videos,
        drones: data.drones,
        status: data.status,
        type: data.type,
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
    monitoredObject.lat = data.lat ? data.lat : monitoredObject.lat;
    monitoredObject.lng = data.lng ? data.lng : monitoredObject.lng;
    monitoredObject.height = data.height ? data.height : monitoredObject.height;
    monitoredObject.monitoredZone = data.monitoredZone ? data.monitoredZone : monitoredObject.monitoredZone;
    monitoredObject.managementUnit = data.managementUnit ? data.managementUnit : monitoredObject.managementUnit;
    monitoredObject.images = data.images ? data.images : monitoredObject.images;
    monitoredObject.videos = data.videos ? data.videos : monitoredObject.videos;
    monitoredObject.drones = data.drones ? data.drones : monitoredObject.drones;
    monitoredObject.status = data.status ? data.status : monitoredObject.status;
    monitoredObject.type = data.type ? data.type : monitoredObject.type;
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

exports.getMonitoredObjectsByZone = async (query) => {
    const { monitoredZone } = query;
    const monitoredObjects = await MonitoredObject
        .find({ monitoredZone: { $in: monitoredZone } })
        .populate([
            { path: 'parent' },
            { path: 'areaMonitored', model: AreaMonitored },
            { path: 'category', model: CategoryMonitoredObject },
        ])
    return monitoredObjects;
}

exports.getMonitoredObjectsByCategory = (query) => {
    const { category } = query;
    const monitoredObjects = await MonitoredObject.find({ category: category })
        .populate([
            { path: 'parent' },
            { path: 'areaMonitored', model: AreaMonitored },
            { path: 'category', model: CategoryMonitoredObject },
        ])

    return monitoredObjects;
}

exports.getMonitoredObjectsByType = async (query) => {
    const { type } = query;
    const monitoredObjects = await MonitoredObject.find({ type: type })
        .populate([
            { path: 'parent' },
            { path: 'areaMonitored', model: AreaMonitored },
            { path: 'category', model: CategoryMonitoredObject },
        ])

    return monitoredObjects;
}