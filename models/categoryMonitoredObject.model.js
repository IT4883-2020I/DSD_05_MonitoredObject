const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const CategoryMonitoredObjectSchema = new Schema ({

    code: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    }
});

CategoryMonitoredObjectSchema.plugin(mongoosePaginate);

module.exports = CategoryMonitoredObject = mongoose.model("CategoryMonitoredObject", CategoryMonitoredObjectSchema);