const Sequelize = require('sequelize');

const moderatorModel = require('./../models/moderator.js');

const addModerator = (req, res, next) => {
  moderatorModel
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((moderator) => {
      if (moderator) {
        // we have a moderator with that email
        res.status(400).json({
          status: 0,
          msg: `Emaili eksizton.`,
        });
      } else {
        moderatorModel
          .create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
          })
          .then((newmoderator) => {
            if (newmoderator) {
              //registered
              res.status(200).json({
                status: 1,
                data: newmoderator,
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

const allModerators = async (req, res, next) => {
  const moderators = await moderatorModel.findAll();
  res.send(moderators);
};

const editModerator = async (req, res, next) => {
  const moderator_data = moderatorModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(moderator_data);
};

const updateModerator = (req, res, next) => {
  moderatorModel
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
          msg: `moderator updated`,
        });
      } else {
        // failed to update
        res.status(400).json({
          status: 0,
          msg: 'Failed to update moderator',
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

const deleteModerator = (req, res, next) => {
  moderatorModel
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((status) => {
      if (status) {
        res.send('moderator deleted successfully');
      } else {
        res.send('Failed to delete moderator');
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: 0,
        data: err,
      });
    });
};

module.exports = { addModerator, allModerators, editModerator, updateModerator, deleteModerator };
