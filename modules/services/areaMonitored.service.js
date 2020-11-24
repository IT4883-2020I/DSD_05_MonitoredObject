const { AreaMonitored } = require('../../models');

exports.getAllAreaMonitored = async (query) => {
    const { limit, page } = query;
    if(!page || !limit) {
        const areaMonitored = await AreaMonitored.find();
        return areaMonitored;
    } else {
        let option = {};

        if(query.code) {
            option.code = new RegExp(query.code, 'i');
        }

        if(query.name) {
            option.name = new RegExp(query.name, 'i');
        }

        if(query.managementUnit) {
            option.managementUnit = query.managementUnit
        }

        if(query.status) {
            option.status = query.status
        }

        return await AreaMonitored
            .paginate(option, {
                limit,
                page
            })
    }
}

exports.createAreaMonitored = async (data) => {
    let query = {
        code: data.code,
        name: data.name,
        managementUnit: data.managementUnit,
        status: data.status,
        description: data.description
    }

    const areaMonitored = await AreaMonitored.create(query)

    return await AreaMonitored.findById(areaMonitored._id)
}

exports.editAreaMonitored = async (id, data) => {
    let areaMonitored = await AreaMonitored.findById(id);
    areaMonitored.code = data.code ? data.code : areaMonitored.code;
    areaMonitored.name = data.name ? data.name : areaMonitored.name;
    areaMonitored.managementUnit = data.managementUnit ? data.managementUnit : areaMonitored.managementUnit;
    areaMonitored.status = data.status ? data.status : areaMonitored.status;
    areaMonitored.description = data.description ? data.description : areaMonitored.description;

    await areaMonitored.save();

    return await AreaMonitored.findById(id);
}

exports.deleteAreaMonitoreds = async (arrayId) => {
    for (let i = 0; i < arrayId.length; i++) {
        await AreaMonitored.deleteOne({ _id: arrayId[i] });
    }

    return arrayId;
}