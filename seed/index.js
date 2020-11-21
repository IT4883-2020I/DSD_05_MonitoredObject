const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const models = require('../models');
const { 
    MonitoredObject
} = models;

require('dotenv').config({
    path: '../.env'
});

// DB CONFIG
const db = process.env.DATABASE;

// KẾT NỐI TỚI CSDL MONGODB
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Kết nối thành công đến MongoDB!\n");
}).catch(err => console.log("ERROR! :(\n", err));

const initDB = async () => {
    console.log("Bắt đầu tạo dữ liệu ...");



    console.log("Tạo dữ liệu mẫu của đối tượng giám sát");
    const monitoredObject = await MonitoredObject.insertMany([
        {
            code: "MO001",
            name: "Kè đê", 
            description: "Kè bảo vệ đê",
            status: "1"
        },
        {
            code: "MO002",
            name: "Cột mốc", 
            description: "Cột mốc đê",
            status: "1"
        },
        {
            code: "MO003",
            name: "Biển báo đê", 
            description: "Biển báo đê",
            status: "2"
        },
        {
            code: "MO004",
            name: "abc", 
            description: "Kè bảo vệ đê",
            status: "1"
        },
    ]);

    console.log("Tạo dữ liệu mẫu đối tượng giám sát thành công");
}
    
//Khởi chạy hàm tạo dữ liệu mẫu ------------------------------//
initDB()
    .then(() => {
        console.log("DONE! :)\n")
        process.exit(1);
    }).catch(err => {
        console.log("ERROR! :(\n", err);
        process.exit(1);
    });