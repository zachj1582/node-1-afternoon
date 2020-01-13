const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getById = require('./getId')

const app = express()

app.get('/api/products', getProducts)

app.get('/api/product/:id', getById)

const port = 3030
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})