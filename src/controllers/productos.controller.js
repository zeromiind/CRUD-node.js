const queryString = require("querystring");

const index = (req,res)=>{
    const query = queryString.stringify(req.query);
    fetch('https://fakestoreapi.com/products?'+query)
  .then((res) => res.json())
  .then((productos) => res.send(productos));
}

const show = (req,res)=>{
    fetch('https://fakestoreapi.com/products/'+req.params.id)
  .then((res) => res.json())
  .then((producto) => res.send(producto));
}

module.exports = {
    index, show, 
}