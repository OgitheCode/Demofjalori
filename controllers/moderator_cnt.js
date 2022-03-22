// const Sequelize = require('sequelize');

// const moderatorModel = require('./../models/moderator.js');

// const addModerator = (req, res, next) => {
//   moderatorModel
//     .findOne({
//       where: {
//         mod_nickname: req.body.mod_nickname,
//         email: req.body.email,
//       },
//     })
//     .then((moderator) => {
//       if (moderator) {
//         // we have a moderator with that email
//         res.status(400).json({
//           status: 0,
//           msg: `Moderatori eksizton.`,
//         });
//       } else {
//         moderatorModel
//           .create({
//             mod_nickname: req.body.nickname,
//             email: req.body.email,
//             password: req.body.password,
//           })
//           .then((newModerator) => {
//             if (newModerator) {
//               //registered
//               res.status(200).json({
//                 status: 1,
//                 data: newModerator,
//               });
//             } else {
//               // not registered
//               res.status(400).json({
//                 status: 0,
//                 msg: `Nuk`,
//               });
//             }
//           })
//           .catch((err) => {
//             res.status(400).json({
//               status: 0,
//               data: err,
//             });
//           });
//       }
//     })
//     .catch((err) => {
//       res.status(400).json({
//         status: 0,
//         data: err,
//       });
//     });
// };

// const allModerators = async (req, res, next) => {
//   const moderators = await moderatorModel.findAll();
//   res.send(moderators);
// };

// const editModerator = async (req, res, next) => {
//   const moderator_data = moderatorModel.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.send(moderator_data);
// };

// const updateModerator = (req, res, next) => {
//   moderatorModel
//     .update(
//       {
//         mod_nickname: req.body.mod_nickname,
//         email: req.body.email,
//         password: req.body.password,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//     .then((updated) => {
//       if (updated) {
//         // we updated successfully
//         res.status(200).json({
//           status: 1,
//           msg: `Moderatori u perditesua!`,
//         });
//       } else {
//         // failed to update
//         res.status(400).json({
//           status: 0,
//           msg: 'Perditesimi i moderatorit deshtoi.',
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).json({
//         status: 0,
//         data: err,
//       });
//     });
// };

// const deleteModerator = (req, res, next) => {
//   moderatorModel
//     .destroy({
//       where: {
//         id: req.params.id,
//       },
//     })
//     .then((status) => {
//       if (status) {
//         res.send('Moderatori u fshi me sukses!');
//       } else {
//         res.send('Fshirja e moderatorit deshtoi.');
//       }
//     })
//     .catch((err) => {
//       res.status(400).json({
//         status: 0,
//         data: err,
//       });
//     });
// };

// module.exports = { addModerator, allModerators, editModerator, updateModerator, deleteModerator };
