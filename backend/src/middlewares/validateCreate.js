const { body } = require("express-validator");

const validateCreate = [
   body("name", "El nombre es requerido").trim().notEmpty().isString(),
   body("price", "El precio es requerido").notEmpty(),
   body("image", "la imgagen es requerida").isString().notEmpty(),
   body("description", "la descripcion es requerida").trim().notEmpty().isString(),
   body("category", "La categoria es requerida").trim().notEmpty().isString(),
   body("available", "La disponibilidad es requerida").isBoolean(),
];
module.exports = validateCreate;