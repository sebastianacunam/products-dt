const server = require("./src/app");
const conectarDB = require('./src/config/bd.js')
const { PORT } = require("./src/config/envs");

conectarDB()

server.listen(PORT, () => {
   console.log(`Server listening on port ☕ ${PORT}`);
});
