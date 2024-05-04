const Product = require("../models/product.js");
const ClientError = require("../utils/errors");


const allProductsServices = async (page, limit = 6, name, category) => {

   const products = await Product.find({
      category: { $regex: new RegExp(category, "i") },
      name: { $regex: new RegExp(name, "i") }
   })
      .skip((page - 1) * limit)
      .limit(limit);
   const totalProductos = await Product.countDocuments({
      category: { $regex: new RegExp(category, "i") },
      name: { $regex: new RegExp(name, "i") }
   });
   const totalPages = Math.ceil(totalProductos / limit);
   if (!products.length) throw new ClientError('No se encontro la categoria', 404);
   return { products, totalPages, totalProductos };

};

module.exports = allProductsServices;