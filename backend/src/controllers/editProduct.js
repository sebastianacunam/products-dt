const editProductServices = require("../services/editProductServices");
const response = require('../utils/response');

const editProduct = async (req, res) => {
   const { id } = req.params;
   const { body } = req;
   const productEdited = await editProductServices(id, body);
   response(res, 201, productEdited);

};

module.exports = editProduct;