const morgan = require("morgan");
const cors = require("cors");
const { json } = require("express");
const { NODE_ENV } = require("../config/envs");

const setMiddlewareApp = (server) => {
   server.use(json());
   server.use(cors());
   NODE_ENV === "development" && server.use(morgan("dev"));

};

module.exports = setMiddlewareApp;