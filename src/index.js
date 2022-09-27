// const express = require('express')

// const fs = require('fs')
// //const products = require('./data/products.json')
// const app = express()
// //const port = 3000


// app.use(express.json())

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.get('/person/id/:id', (req, res) => {
// //     res.json({
// //         name: 'david',
// //         id: req.params.id
// //     })
// //   })

// app.get('/products', (req, res) => {
//     res.json(products)
// })

// let prodPriceLess50 = products.filter(producto => producto.id <= 15)

// app.get('/products', (req, res) => {
//     res.json(prodPriceLess50)
// })


// app.post("/products/add", (req, res) => {
//   console.log(req.body)
//   const newProd = {
//     // id: req.body.id,
//     // name: req.body.id,
//     // price: req.body.price
//     id: 1001,
//     name: "pablo",
//     price: "23"
//   }
//   if (!newProd.id) {
//     res.sendStatus(400)
//   }
//   products.push(newProd)
//   fs.writeFile('./data/products.json', JSON.stringify(products), (err) => {
//   })
//   res.json(newProd)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//require("dotenv").config();     //variable de entorno, obtiene el databaseurl y el puerto aca
const cors = require("cors")
const express = require('express')
const route = require('routers')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
DATABASE_URL = "mongodb+srv://pablo:12344321@cluster0.mshrsa4.mongodb.net/?retryWrites=true&w=majority"

const router = require("./routes")


app.use(express.static("public"));
app.set("json spaces", 2)


app.use(express.json());
app.use(router)

mongoose.connect("mongodb+srv://pablo:12344321@cluster0.mshrsa4.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: 3000 }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });

  