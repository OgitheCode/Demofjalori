const express = require('express');
const app = express();

const sequelize = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'));


app.use(express.static('public'));

//ngarko modelet
const UserModel = require('./models/users')
const AdminModel = require('./models/admin')
const ModeratorModel = require('./models/moderator')
const SlangModel = require('./models/slang')

require('dotenv').config();

sequelize.sync();



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
