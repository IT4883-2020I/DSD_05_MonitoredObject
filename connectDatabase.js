const mongoose = require("mongoose");
const db = `mongodb://localhost:27017/monitoredObject`;
const optionConnectDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

mongoose // Connect to MongoDB
    .connect(process.env.DATABASE || db, optionConnectDB)
    .then(() => console.log("Kết nối dữ liệu thành công"))
    .catch((err) => console.log(err));