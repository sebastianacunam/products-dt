const ClientError = require('../utils/errors');

const mongoose = require('mongoose');


const isValidObjectId = (paramName) => {
   return (req, res, next) => {
      const paramValue = req.params[paramName];

      if (!paramValue || !mongoose.Types.ObjectId.isValid(paramValue)) {
         throw new ClientError('ID no válido', 401);
      }

      next();
   };
};
module.exports = isValidObjectId;
