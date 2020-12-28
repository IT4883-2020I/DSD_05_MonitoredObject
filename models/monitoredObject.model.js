const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const MonitoredObjectSchema = new Schema ({

    parent: {
        type: Schema.Types.ObjectId,
        replies: this
    },

    areaMonitored: {
        type: Schema.Types.ObjectId
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryMonitoredObject'
    },

    code: {
        type: String
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

    height: { //Độ cao
        type: Number
    },

    monitoredZone: [{
        type: Schema.Types.ObjectId
    }],

    managementUnit: {
        type: Schema.Types.ObjectId,
    },

    images: [{
        type: Schema.Types.ObjectId,
    }],

    videos: [{
        type: Schema.Types.ObjectId,
    }],

    drones: [{
        type: Schema.Types.ObjectId,
    }],

    status: {
        type: String
    },

    type: {
        type: String,
    },

    description: {
        type: String
    }
}, {
    timestamps: true
});

MonitoredObjectSchema.plugin(mongoosePaginate);

module.exports = MonitoredObject = mongoose.model("MonitoredObject", MonitoredObjectSchema);