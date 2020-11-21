const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const server = require('http').createServer(app);

const swaggerUi = require('swagger-ui-express');

require("dotenv").config();
require('./connectDatabase');

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
const router = express.Router();

router.use("/monitored-object", require("./modules/routers/monitoredObject.router"));

app.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server up and running on: ${port} !`));