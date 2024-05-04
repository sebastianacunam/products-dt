const mongoose = require("mongoose")
const envs  = require('./envs.js')

const {MONGO_URI} = envs;

const conectarDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        const connection = await mongoose.connect(MONGO_URI)
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB Conectado en : ${url}`)
    } 
    catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1)
    }
}

module.exports = conectarDB