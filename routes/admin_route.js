const express = require('express')

const {addAdmin, allAdmins, editAdmin, updateAdmin, deleteAdmin} = require('./../controllers/admin_cnt')

const router = express.Router()

router.route('/').get(allAdmins).post(addAdmin)

router.route('/edit/:id').get(editAdmin).post(updateAdmin);

router.route('/delete/:id').get(deleteAdmin)

module.exports = router