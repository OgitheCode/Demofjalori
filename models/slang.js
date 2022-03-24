const Sequelize = require('sequelize')
const sequelize = require('./../config/db')
const User = require('./users')

const Slang = sequelize.define(
    'slang',
      {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          word: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        meaning: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        example: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        key_word: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
    },
      {
        timestamps: false,
      })

    User.hasMany(Slang, {foreignKey: {name: 'userId', allowNull: false}, 
      sourceKey: "user_id"})
      
    Slang.belongsTo(User, {foreignKey: {name: 'userId', allowNull: false}, 
      sourceKey: "user_id"})

    module.exports = Slang