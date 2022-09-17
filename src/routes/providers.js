const router = require('express').Router()
const provider = require('../controllers/providers')

router.get("/", provider.getAll)
router.post("/",  provider.create);
router.put("/:id", provider.update)
router.delete("/:id", provider.remove)
router.patch("/:id", provider.unDeleted)
module.exports = router;