const Product = require("../models/product.js");
const ClientError = require("../utils/errors");
const getProductByIdServices = require("./getProductByIdServices");


const editProductServices = async (id, body) => {
   const { name, price, image, description, category, available } = body;
   const product = await getProductByIdServices(id);
   const editProduct = await Product.findByIdAndUpdate(id, {
      name: name ? name : product.name,
      price: price ? price : product.price,
      image: image ? image : product.image,
      description: description ? description : product.description,
      category: category ? category : product.category,
      available: available ? available : product.available,
   }, { new: true })
   if (!editProduct) throw new ClientError('No se encontro el producto', 404);
   return editProduct;
};
module.exports = editProductServices;