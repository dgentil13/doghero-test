const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const router = express.Router();
const Walks = require('../models/Walks');
const User = require('../models/User');

// Nodemailer config
const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a69684230ef027',
    pass: '2426cf604716d6',
  },
});

// List All Walks
router.get('/walks', (req, res) => {
  Walks.find()
    .populate('walker owner dogs')
    .then(walks => res.json(walks))
    .catch(err => res.json(err));
});

// Create a Walk and sends email to walkers
router.post('/create-walk', (req, res) => {
  const { duration, days, time, address, dogs } = req.body;

  const newWalk = new Walks({
    duration,
    days,
    time,
    address,
    status: 'Pending',
    dogs,
    owner: req.user,
  });

  newWalk
    .save()
    .then(walk => {
      const email = [];
      User.findByIdAndUpdate(req.user.id, { $push: { walks: walk } })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err));

      User.find({ role: 'Walker' })
        .then(walker => {
          walker.map(el => {
            return email.push(el.email);
          });

          email.forEach(el => {
            transporter.sendMail({
              from: '"DogHero" <teste@email.com>',
              to: el,
              subject: 'Dog Hero: New Walk Available!',
              text: `Theres a new walk available for you! 
              ${newWalk.owner.number}  ${newWalk.owner.fullName}
              `,
            });
          });
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

// Route for changing status of walk from Pending to Confirmed
router.put('/confirm/:walkId', (req, res) => {
  Walks.findOneAndUpdate(
    { _id: req.params.walkId },
    { status: 'Confirmed', walker: req.user },
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
