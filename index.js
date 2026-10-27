require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

const mainRouter = require("./src/routes/main.router")
app.use(mainRouter);
app.use("/productos", require("./src/routes/productos.router"));

//ademas de las rutas, estan los parametros, ejem: rutas->/producto, /ventas, /info. ejem: parametros->id, price, rate