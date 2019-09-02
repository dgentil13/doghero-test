const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const router = express.Router();
const Walks = require('../models/Walks');
const User = require('../models/User');

let transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a69684230ef027',
    pass: '2426cf604716d6',
  },

  // service: 'gmail',
  // auth: {
  //   user: 'ahoydanni3@gmail.com',
  //   pass: 'Gamegrumps1307',
  // },
});

// Create a Walk
router.post('/create-walk', (req, res) => {
  const { type, duration, days, time, address } = req.body;
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  const confirmationCode = token;
  const newWalk = new Walks({
    type,
    duration,
    days,
    time,
    address,
    owner: req.user,
    status: 'Pending',
    confirmationCode,
  });

  newWalk
    .save()
    .then(() => {
      let email = [];

      User.findByIdAndUpdate(req.user.id, { $push: { walks: newWalk } })
        .then(res => res.status(200).json(res))
        .catch(err => res.status(400).json(err));

      User.find({ role: 'Walker' })
        .then(res => {
          res.map(el => {
            email.push(el.email);
          });
          // console.log('walkers:', email);
          // console.log('newWalk:', newWalk.owner);
          email.forEach(el => {
            // console.log('WHATS THIS', el);
            transporter.sendMail({
              from: '"DogHero" <teste@email.com>',
              to: el,
              subject: 'Dog Hero: New Walk Available!',
              text: `Theres a new walk available for you! 
              ${newWalk.owner.number}  ${newWalk.owner.fullName}
             https://localhost:8000/confirm/${confirmationCode}
              `,
            });
          });
          return res.status(200).json(res);
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

router.get('/confirm/:confirmNum', (req, res) => {
  Walks.findOneAndUpdate(
    { confirmationCode: req.params.confirmNum },
    { status: 'Confirmed' },
  )
    .then(res => res.status(200).json(res))
    .catch(err => res.status(400).json(err));
});

// Delete Walk
router.delete('/del-walk/:walkId', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.walkId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findByIdAndUpdate(req.user.id, {
    $pull: { walks: req.params.walkId },
  })
    .then(() => {
      Walks.findByIdAndRemove(req.params.walkId)
        .then(() => {
          res.json({
            message: `Pet with id ${req.params.walkId} was removed successfully.`,
          });
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
