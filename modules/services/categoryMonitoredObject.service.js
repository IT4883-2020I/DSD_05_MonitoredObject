const { CategoryMonitoredObject } = require('../../models');

exports.getAlllCategoryMonitoredObject = async (query) => {
    const { limit, page } = query;
    if(!page || !limit) {
        const categories = await CategoryMonitoredObject.find();
        return categories;
    } else {
        let option = {};

        if(query.code) {
            option.code = new RegExp(query.code, 'i');
        }

        if(query.name) {
            option.name = new RegExp(query.name, 'i');
        }

        return await CategoryMonitoredObject
            .paginate(option, {
                limit,
                page
            })
    }
}

exports.createCategoryMonitoredObject = async (data) => {
    let query = {
        code: data.code,
        name: data.name,
        description: data.description,
    }

    const category = await CategoryMonitoredObject.create(query);

    return await CategoryMonitoredObject.findById(category._id);
}

exports.editCategoryMonitoredObject = async (id, data) => {
    let category = await CategoryMonitoredObject.findById(id);

    category.code = data.code ? data.code : category.code;
    category.name = data.name ? data.name : category.name;
    category.description = data.description ? data.description : category.description;

    await category.save();

    return await CategoryMonitoredObject.findById(id);
}

exports.deleteCategoryMonitoredObject = async (arrayId) => {
    for (let i = 0; i < arrayId.length; i++) {
        await CategoryMonitoredObject.deleteOne({ _id: arrayId[i] });
    }

    return arrayId;
}