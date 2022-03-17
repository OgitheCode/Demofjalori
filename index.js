const express = require('express');
const app = express();

const sequelize = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'));


app.use(express.static('public'));

//ngarko modelet
const PerdoruesiModel = require('./models/perdoruesi')

require('dotenv').config();

sequelize.sync();



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
