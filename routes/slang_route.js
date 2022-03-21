const express = require('express')

const {addSlang, allSlangs, editSlang, updateSlang, deleteSlang} = require('./../controllers/slang_cnt')

const router = express.Router()

router.route('/').get(allSlangs).post(addSlang)

router.route('/edit/:id').get(editSlang).post(updateSlang);

router.route('/delete/:id').get(deleteSlang)

module.exports = router