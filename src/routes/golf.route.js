const express = require('express')
const router = express.Router()
const golf = require('../controllers/golf.controller')
const verifyToken = require('../helpers/verifyToken')

router.post('/golfs', verifyToken, golf.create)
router.get('/golfs', golf.all)
router.get('/removeAll', verifyToken, golf.removeAll)
router.get('/golfs/id', golf.findOne)
router.get('/golfs/update/id', verifyToken, golf.updateOne)
router.get('/golfs/remove/id', verifyToken, golf.removeOne)

module.exports = router