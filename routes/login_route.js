const express = require('express')

const {updatePassword} = require('./../controllers/auth_cnt')

const {login, logout} = require('./../controllers/login_cnt')

const router = express.Router()

router.route('/login').post(login)

router.route('/logout').post(logout)

router.route('/updatepassword').post(updatePassword)

module.exports = router