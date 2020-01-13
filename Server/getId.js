const product = require('../products.json')

const getById = (req,res)=>{
    const {id} = req.params
    let selectedProduct = product.find(e=> e.id === +id)
    if(!selectedProduct){
        res.status(500).send('Item not in list')
    }
    res.status(200).send(selectedProduct)
}

module.exports = getById