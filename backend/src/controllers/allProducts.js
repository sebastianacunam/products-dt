const allProductsServices = require("../services/allProductsServices");
const response = require("../utils/response");


const allProducts = async ({ query }, res) => {
   const { page, limit, name, category } = query;
   const products = await allProductsServices(page, limit, name, category);
   response(res, 201, products);
};

module.exports = allProducts;