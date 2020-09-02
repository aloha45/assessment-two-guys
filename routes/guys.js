const router = require('express').Router()
const guysCtrl = require('../controllers/guys')

/* GET users listing. */
router.get('/', guysCtrl.index)
router.post('/', guysCtrl.create)
router.get('/:id', guysCtrl.new)
router.put('/:id', guysCtrl.update)
router.delete('/:id', guysCtrl.delete)



module.exports = router;
