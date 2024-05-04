const express = require('express');
const router = require('./routes/index.js');
const setMiddlewareApp = require('./middlewares/setMiddlewareApp');

const server = express();

setMiddlewareApp(server);
server.use("/", router)

server.use((err, req, res, next) => {
   res.status(err.statusCode || 500).send({
      error: true,
      message: err.message
   });
});



module.exports = server;