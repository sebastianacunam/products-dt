const createProductServices = require("../services/createProductServices");
const response = require('../utils/response');

const createProduct = async ({ body }, res) => {
   const newProduct = await createProductServices(body);
   response(res, 201, newProduct);
};

module.exports = createProduct;