const express = require('express');

const router = express.Router();
const User = require('../models/User');

// Populates Logged In User
router.get('/user', (req, res) => {
  User.findById(req.user.id)
    .populate('dogs walks')
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// Edit User Info
router.put('/user-edit', (req, res) => {
  const { fullName, number, address, image } = req.body;
  User.findByIdAndUpdate(req.user.id, {
    $set: { fullName, number, address, profileImg: image },
  })
    .then(() => {
      res.status(200).json({
        message: `User with ${req.user.id} is updated successfully.`,
      });
    })
    .catch(err => res.json(err));
});

// Edit profile picture
router.put('/user-picture', (req, res) => {
  const { image } = req.body;
  User.findByIdAndUpdate(req.user.id, { $set: { profileImg: image } })
    .then(() => {
      res.json({
        message: `User with ${req.user.id} is updated successfully.`,
      });
    })
    .catch(err => res.json(err));
});

module.exports = router;
