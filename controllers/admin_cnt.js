const Sequelize = require('sequelize');

const adminModel = require('./../models/admin.js');

const addadmin = (req, res, next) => {
  adminModel
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((admin) => {
      if (admin) {
        // we have a admin with that email
        res.status(400).json({
          status: 0,
          msg: `Emaili eksizton.`,
        });
      } else {
        adminModel
          .create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
          })
          .then((newadmin) => {
            if (newadmin) {
              //registered
              res.status(200).json({
                status: 1,
                data: newadmin,
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

const allAdmins = async (req, res, next) => {
  const admins = await adminModel.findAll();
  res.send(admins);
};

const editadmin = async (req, res, next) => {
  const admin_data = adminModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(admin_data);
};

const updateadmin = (req, res, next) => {
  adminModel
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
          msg: `admin updated`,
        });
      } else {
        // failed to update
        res.status(400).json({
          status: 0,
          msg: 'Failed to update admin',
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

const deleteadmin = (req, res, next) => {
  adminModel
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((status) => {
      if (status) {
        res.send('admin deleted successfully');
      } else {
        res.send('Failed to delete admin');
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: 0,
        data: err,
      });
    });
};

module.exports = { addadmin, alladmins, editadmin, updateadmin, deleteadmin };
