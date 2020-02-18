const express = require('express')
const router = express.Router()
const manager = require('../controllers/manager.controller')
const verifyToken = require('../helpers/verifyToken')

router.post('/managers', verifyToken, manager.create)
router.get('/managers', verifyToken, manager.all)
router.get('/removeAll', verifyToken, manager.removeAll)
router.get('/managers/id', verifyToken, manager.findOne)
router.get('/managers/update/id', verifyToken, manager.updateOne)
router.get('/managers/remove/id', verifyToken, manager.removeOne)

module.exports = router