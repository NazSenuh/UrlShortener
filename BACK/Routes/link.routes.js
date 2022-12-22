const Router = require('express')
const router = new Router()
const controller = require('../Controllers/linkController')
const auth = require('../authmiddleware')



router.post('/new', auth, controller.new)
router.get('/', auth,  controller.main)
router.get('/:id',auth, controller.id)



module.exports = router