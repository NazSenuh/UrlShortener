const Router = require('express')
const router = new Router()
const controller = require('../Controllers/authController')
const {check} = require('express-validator')


router.post('/registration', [
    check('username', "Username can't be blank").notEmpty(),
    check('password', "password must be longet than 4").isLength({min:4, max:10})
], controller.registration)
router.post('/login', controller.login)


module.exports = router