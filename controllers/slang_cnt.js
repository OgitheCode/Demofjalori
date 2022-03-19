const Sequelize = require('sequelize');

const slangModel = require('./../models/slang.js');

const addadmin = (req, res, next) => {
  slangModel
    .findOne({
      where: {
        word: req.body.word,
      },
    })
    .then((slang) => {
      if (slang) {
        // we have a admin with that email
        res.status(400).json({
          status: 0,
          msg: `Fjala eksizton.`,
        });
      } else {
        slangModel
          .create({
            word : req.body.word,
            meaning : req.body.meaning,
            example : req.body.example,
            key_word : req.body.key_word
          })
          .then((newSlang) => {
            if (newSlang) {
              //registered
              res.status(200).json({
                status: 1,
                data: newSlang,
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

const allSlangs = async (req, res, next) => {
    const slangs = await slangModel.findAll();
    res.send(slang);
  };
  
  const slangModel = async (req, res, next) => {
    const slang_data = slangModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(slang_data);
  };
  
  const update_slang = (req, res, next) => {
    slangModel
      .update(
        {
            word : req.body.word,
            meaning : req.body.meaning,
            example : req.body.example,
            key_word : req.body.key_word
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
            msg: `Slang updated`,
          });
        } else {
          // failed to update
          res.status(400).json({
            status: 0,
            msg: 'Failed to update slang',
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
  
  const deleteSlang = (req, res, next) => {
    slangModel
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((status) => {
        if (status) {
          res.send('Slang deleted successfully');
        } else {
          res.send('Slang to delete moderator');
        }
      })
      .catch((err) => {
        res.status(400).json({
          status: 0,
          data: err,
        });
      });
  };
  