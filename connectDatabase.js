const mongoose = require("mongoose");
const db = `mongodb+srv://thangnguyen:thangnguyen26@cluster0.sxzso.mongodb.net/monitoredObject?retryWrites=true&w=majority`;
const optionConnectDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

mongoose // Connect to MongoDB
    .connect(db, optionConnectDB)
    .then(() => console.log("Kết nối dữ liệu thành công"))
    .catch((err) => console.log(err));