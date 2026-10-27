const express = require("express");
const router = express.Router();
const queryString = require("querystring");
const controller = require("../controllers/productos.controller")
//gracias a "query" modificamos la ruta /productos para que reciba consultas
router.get("/", controller.index);

//ruta con parametros (id en este caso)
router.get("/:id", controller.show);

module.exports=router;