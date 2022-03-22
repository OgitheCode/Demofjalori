const Sequelize = require('sequelize')
const sequelize = require('./../config/db')

const User = sequelize.define(
'user',
  {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },  
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
      defaultValue: "Active",
   
    },

    role: {
      type:Sequelize.ENUM('user', 'moderator'),
      defaultValue: 'user',
    }
},
  {
    timestamps: false,
  })

module.exports = User