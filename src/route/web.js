import express from "express";

let router = express.Router();

let initWebRouters = (application) => {
    return application.use("/", router);
}

module.exports = initWebRouters;