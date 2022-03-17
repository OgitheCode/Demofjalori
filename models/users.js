const Sequelize = require('sequelize')
const sequelize = require('./../config/db')

const User = sequelize.define(
'user',
  {
      nickname: {
      type: Sequelize.STRING(120),
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(120),
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(20),
      defaultValue: "perdorues",
      allowNull: false,
    },
},
  {
    timestamps: false,
  })

module.exports = User