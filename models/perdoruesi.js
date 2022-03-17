const Sequelize = require('sequelize')
const sequelize = require('./../config/db')

const Perdoruesi = sequelize.define(
'perdoruesi',
  {
      nofka: {
      type: Sequelize.STRING(120),
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(120),
      unique: true,
      allowNull: false,
    },
    fjalekalimi: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    statusi: {
      type: Sequelize.STRING(20),
      defaultValue: "perdorues",
      allowNull: false,
    },
},
  {
    timestamps: false,
  })

module.exports = Perdoruesi