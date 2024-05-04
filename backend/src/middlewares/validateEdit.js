const { body } = require("express-validator");

const validateEdit = [
   body("name", "El nombre debe ser una cadena de texto").optional().trim().isString(),
   body("image", "proporciona una imagen valida").optional().isString(),
   body("description", "la descripcion debe ser una cadena de texto").optional().trim().isString(),
   body("category", "La categoria debe ser una cadena de texto").optional().trim().isString(),
   body("available", "La disponibilidad debe ser un booleano").optional().isBoolean(),
];
module.exports = validateEdit;