const express = require('express')
const products = require('./data/products.json')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/person/id/:id', (req, res) => {
//     res.json({
//         name: 'david',
//         id: req.params.id
//     })
//   })

// app.get('/products', (req, res) => {
//     res.json(products)
// })

let prodPriceLess50 = products.filter(producto => producto.id <= 15)

app.get('/products', (req, res) => {
    res.json(prodPriceLess50)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

