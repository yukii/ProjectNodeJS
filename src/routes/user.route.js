const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')
const verifyToken = require('../helpers/verifyToken')

router.post('/users', verifyToken, user.create)
router.get('/users', verifyToken, user.all)
router.get('/removeAll', verifyToken, user.removeAll)
router.get('/users/id', verifyToken, user.findOne)
router.get('/users/update/id', verifyToken, user.updateOne)
router.get('/users/remove/id', verifyToken, user.removeOne)

module.exports = router 