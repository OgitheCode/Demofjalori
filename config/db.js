const Sequelize = require('sequelize');

const sequelize = new Sequelize('Demofjalori', 'root', '', {
  host: process.env.HOST,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`CONNECTED`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
