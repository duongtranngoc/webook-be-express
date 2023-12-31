import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
import connectDB from "./config/connectDB";

require('dotenv').config();

let application = express();
application.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));

viewEngine(application);
initWebRouters(application);

connectDB();

let port = process.env.PORT || 2728;

application.listen(port, () => {
    console.log("Backend Nodejs đang chạy trên port: http://localhost:" + port);
})