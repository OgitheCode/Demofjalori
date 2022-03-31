const express = require('express');
const app = express();
const session = require("express-session")

const sequelize = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'));


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: true,
  })
);


//ngarko modelet
const UserModel = require('./models/users')
const AdminModel = require('./models/admin')
// const ModeratorModel = require('./models/moderator')
const SlangModel = require('./models/slang')

const UserRoute = require('./routes/user_route')
const AdminRoute = require('./routes/admin_route')
// const ModeratorRoute = require('./routes/moderator_route')
const SlangRoute = require('./routes/slang_route')
const loginRoute = require('./routes/login_route')

app.use('/user', UserRoute);
app.use('/admin', AdminRoute)
app.use('/slang', SlangRoute)
app.use("/auth", loginRoute)


require('dotenv').config();

sequelize.sync();



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
