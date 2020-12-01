const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const MonitoredObjectSchema = new Schema ({

    parent: {
        type: Schema.Types.ObjectId,
        replies: this
    },

    areaMonitored: {
        type: Schema.Types.ObjectId,
        ref: 'AreaMonitored'
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryMonitoredObject'
    },

    code: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    lat: { // Vĩ độ
        type: String,
    },

    lng: { // Kinh độ
        type: String,
    },

    managementUnit: {
        type: String,
    },

    status: {
        type: String,
        enum: ["1", "2", "3"]
    },

    description: {
        type: String
    }
});

MonitoredObjectSchema.plugin(mongoosePaginate);

module.exports = MonitoredObject = mongoose.model("MonitoredObject", MonitoredObjectSchema);