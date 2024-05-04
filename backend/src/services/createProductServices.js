const Product = require("../models/product.js");
const ClientError = require("../utils/errors");

const createProductServices = async (body) => {
   const { name, price, image, description, category, available } = body;
   const product = new Product(
      {
         name,
         price: parseInt(price),
         image,
         description,
         category,
         available
      }
   );
   await product.save();
   if (!product) throw new ClientError('No se pudo crear el producto');
   return product;
};

module.exports = createProductServices;

