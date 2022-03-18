const Sequelize = require('sequelize');

const userModel = require('./../models/users.js');

const addUser = (req, res, next) => {
  userModel
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      if (user) {
        // we have a user with that email
        res.status(400).json({
          status: 0,
          msg: `Emaili eksizton.`,
        });
      } else {
        userModel
          .create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
          })
          .then((newUser) => {
            if (newUser) {
              //registered
              res.status(200).json({
                status: 1,
                data: newUser,
              });
            } else {
              // not registered
              res.status(400).json({
                status: 0,
                msg: `Nuk`,
              });
            }
          })
          .catch((err) => {
            res.status(400).json({
              status: 0,
              data: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: 0,
        data: err,
      });
    });
};

const allUsers = async (req, res, next) => {
  const users = await userModel.findAll();
  res.send(users);
};

const editUser = async (req, res, next) => {
  const user_data = userModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(user_data);
};

const updateUser = (req, res, next) => {
  userModel
    .update(
      {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updated) => {
      if (updated) {
        // we updated successfully
        res.status(200).json({
          status: 1,
          msg: `User updated`,
        });
      } else {
        // failed to update
        res.status(400).json({
          status: 0,
          msg: 'Failed to update user',
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: 0,
        data: err,
      });
    });
};

const deleteUser = (req, res, next) => {
  userModel
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((status) => {
      if (status) {
        res.send('User deleted successfully');
      } else {
        res.send('Failed to delete user');
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: 0,
        data: err,
      });
    });
};

module.exports = { addUser, allUsers, editUser, updateUser, deleteUser };
