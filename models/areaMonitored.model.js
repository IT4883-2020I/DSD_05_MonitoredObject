const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const AreaMonitoredSchema = new Schema ({

    code: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    address: {
        type: String
    },

    managementUnit: {
        type: String,
    },

    status: {
        type: String,
        enum: ["1", "2"]
    },

    description: {
        type: String
    }
});

AreaMonitoredSchema.plugin(mongoosePaginate);

module.exports = AreaMonitored = mongoose.model("AreaMonitored", AreaMonitoredSchema);