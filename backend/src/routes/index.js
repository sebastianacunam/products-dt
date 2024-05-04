const { Router } = require("express");
const allProducts = require("../controllers/allProducts");
const createProduct = require("../controllers/createProduct");
const getProductById = require("../controllers/getProductById");
const editProduct = require("../controllers/editProduct");
const validateId = require("../middlewares/validationId");
const asyncCatched = require("../utils/asyncCatched");
const validateCreate = require("../middlewares/validateCreate");
const validateEdit = require("../middlewares/validateEdit");


const router = Router();

router.get('/products', asyncCatched(allProducts));
router.get('/product/:id', validateId("id"), asyncCatched(getProductById));
router.post('/create-product', validateCreate, asyncCatched(createProduct));
router.patch('/edit-product/:id', validateId("id"), validateEdit, asyncCatched(editProduct));

module.exports = router;