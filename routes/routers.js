const express = require('express')
const router = express.Router()
//call product
const fromDB = require('../model/modelDB')
//call controller
const control = require('../controller/controller')

router.get('/',control.homePage)

//command load
router.get('/load',control.loadPage)
router.post('/addload',control.addload)
router.get('/wrongload',control.wrongPage)

//command store
router.get('/store',control.storePage)
router.post('/addstore',control.addstore)
router.get('/wrongstore',control.wrongPage)

//command add register
router.get('/addRegister',control.addRegisterPage)
router.post('/addRegis',control.addRegis)
router.get('/wrongRegis',control.wrongPage)

//command add immediate
router.get('/addImmediate',control.addImmediatePage)
router.post('/addImme',control.addImme)
router.get('/wrongImme',control.wrongPage)

router.get('/showData/:type',control.showdataPage)

module.exports = router