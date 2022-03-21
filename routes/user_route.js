const express = require('express')

const {addUser, allUsers, editUser, updateUser, deleteUser} = require('./../controllers/user_cnt')

const router = express.Router()

router.route('/').get(allUsers).post(addUser)

router.route('/edit/:id').get(editUser).post(updateUser);

router.route('/delete/:id').get(deleteUser)

module.exports = router