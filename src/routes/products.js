const router = require('express').Router()
const products = require('../controllers/products')

router.get("/", products.getAll)
router.post("/",  products.create);
router.put("/:id", products.update)
router.patch("/:id", products.remove)
module.exports = router;


//le asigno una ruta al metodo