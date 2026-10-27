//para usar las variables de entorno(.env) en index.js se necesita "dotenv"
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

//hasta aca se crea un servidor con las 4 lineas anteriores 

app.get("/",(req,res)=>{
    res.send("Hola Mundo desde node.js :]")
}) 

//se creó la ruta "/"
// se instala nodemon para que al realizar cambios en el proyecto no sea necesario reiniciar el servidor, para esto se modifica el apartado de scripts en package.json, con start y dev, por eso para iniciar el servidor luego es con "npm run dev"
