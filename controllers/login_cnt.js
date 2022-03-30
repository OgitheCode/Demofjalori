const userModel = require('./../models/users')
const adminModel = require('./../models/admin')
const bcrypt = require('bcrypt')

const login =  (req,res,next) => {
    userModel.findOne({
        where: {
            email: req.body.email,
        },
    }).then((user) => {
        if(user) {
            bcrypt.compare(req.body.password, user.password, (err,result) => {
                if(result){
                   // console.log('@@@@', req.session)
                   req.session.isLoggedIn = true
                   req.session.userId = user.user_id

                   res.send('Perdoruesi u kyq')
                }
                else {
                    res.status(400).json({
                        status: 0,
                        msg: 'Fjalekalimi nuk pershtatet. Mos keni harruar passwordin?'
                    })
                }
            })
        } else{
            adminModel.findOne({
                where: {
                    email: req.body.email,
                },
            }).then((admin) => {
                if(admin) {
                    bcrypt.compare(req.body.password, admin.password, (err,result) => {
                        if(result){
                           // console.log('@@@@', req.session)
                           req.session.isLoggedIn = true
                           req.session.adminId = admin.id
        
                           res.send('Ok')
                        }
                        else {
                            res.status(400).json({
                                status: 0,
                                msg: 'Fjalekalimi i adminit nuk pershtatet'
                            })
                        }
                    })
                } else{
                    res.status(400).json({
                        status: 0,
                        msg: 'Nuk ka as perdorues as admin me kete email. Mos keni harruar e ose passwordin?'
                    })
                }
            })
        }
    })
}

const logout = (req,res,next) => {
    res.session.destroy((err) => {
        if(err){
            res.send('Back')
        } else {
            console.log(req.session)
            res.send('Homepage. You are logged out')
        }
    })
}

module.exports = {login, logout}
