const { Schema, mongoose } = require("mongoose");


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    available: {
        type: Boolean,
        required: true,
        trim: true,
    }
})


const Product = mongoose.model("Product", productSchema);
module.exports = Product;