// const Sequelize = require('sequelize')
// const sequelize = require('./../config/db')

// const Moderator = sequelize.define(
// 'Moderator',
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },  
//       mod_nickname: {
//       type: Sequelize.STRING(120),
//       unique: true,
//       allowNull: false,
//     },
//     email: {
//       type: Sequelize.STRING(120),
//       unique: true,
//       allowNull: false,
//     },
//     password: {
//       type: Sequelize.STRING(30),
//       allowNull: false,
//     },
//     status: {
//       type: Sequelize.STRING(20),
//       defaultValue: "Moderator",
//       allowNull: false,
//     },
// },
//   {
//     timestamps: false,
//   })

// module.exports = Moderator