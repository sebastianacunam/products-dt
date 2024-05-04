const Product = require("../models/product.js");
const ClientError = require("../utils/errors");


const getProductByIdServices = async (id) => {
   const product = await Product.findById(id);
   if (!product) throw new ClientError('No se encontro el producto', 404);
   return product;
};

module.exports = getProductByIdServices;