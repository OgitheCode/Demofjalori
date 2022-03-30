const bcrypt = require('bcrypt')
const adminModel = require('./../models/admin')
const userModel = require('./../models/users')
const Sequelize = require('sequelize')

const updatePassword = async (req,res,next) => {
    const currentUserId = req.session.userId
    const currentAdminId = req.session.adminId

    const admin = await adminModel.findOne({
        where: {
            id: currentAdminId,
        }
    })

    const user = await userModel.findOne({
        where: {
            user_id: currentUserId,
        }
    })

    let { currentPassword, newPassword, confirmPassword} = req.body

    if(!currentPassword || !newPassword || !confirmPassword){
        return res.send(`All fields must be filled`)
    }

    if(!bcrypt.compare(currentPassword,admin.password)){
        return res.send(`Current password is incorrect`)
    }

    if(newPassword != confirmPassword){
        return res.send("Password didn't match")
    }

    admin.password = bcrypt.hashSync(req.body.newPassword,6)
    user.password = bcrypt.hashSync(req.body.newPassword)

    await admin.save()
    await user.save()

    res.send('Updated password')
}

module.exports = { updatePassword }