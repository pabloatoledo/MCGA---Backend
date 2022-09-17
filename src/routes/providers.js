const router = require('express').Router()
const provider = require('../controllers/providers')

router.get("/", provider.getAll)
router.post("/",  provider.create);
router.put("/:id", provider.update)
router.patch("/:id", provider.remove)
module.exports = router;