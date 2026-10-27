const index = (req,res) => {
    res.send("Hola mundo desde el controlador main");
};

module.exports = {
    index, 
}