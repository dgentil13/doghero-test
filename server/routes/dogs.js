const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Dogs = require('../models/Dog');
const User = require('../models/User');

// List All Dogs from user
router.get('/dogs', (req, res) => {
  Dogs.find({ owner: req.user.id })
    .populate('owner')
    .then(dogs => res.json(dogs))
    .catch(err => res.json(err));
});

// Add new Pet
router.post('/add-pet', (req, res) => {
  const { name, gender, race, age, size, additionalInfo, picture } = req.body;

  const newDog = new Dogs({
    name,
    gender,
    race,
    age,
    size,
    additionalInfo,
    picture,
    owner: req.user,
    activeWalk: true,
  });

  newDog
    .save()
    .then(dog => {
      User.findByIdAndUpdate(req.user.id, { $push: { dogs: dog } })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

// Edit Pet Info
router.put('/edit-pet/:petId', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.petId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const { name, gender, race, age, size, additionalInfo, picture } = req.body;

  User.findByIdAndUpdate(req.user.id, {
    $set: { dogs: req.params.petId },
  })
    .then(() => {
      Dogs.findByIdAndUpdate(req.params.petId, {
        $set: { name, gender, race, age, size, additionalInfo, picture },
      })
        .then(() => {
          res.status(200).json({
            message: `Pet with id ${req.user.id} was updated successfully.`,
          });
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
      res.json(err);
    });
});

// Edit Pet Info
router.put('/active/:petId', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.petId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const { activeWalk } = req.body;

  User.findByIdAndUpdate(req.user.id, {
    $set: { dogs: req.params.petId },
  })
    .then(() => {
      Dogs.findByIdAndUpdate(req.params.petId, {
        $set: { activeWalk },
      })
        .then(() => {
          res.status(200).json({
            message: `Pet with id ${req.user.id} was updated successfully.`,
          });
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
      res.json(err);
    });
});

// Delete Pet
router.delete('/del-pet/:petId', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.petId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findByIdAndUpdate(req.user.id, {
    $pull: { dogs: req.params.petId },
  })
    .then(() => {
      Dogs.findByIdAndRemove(req.params.petId)
        .then(() => {
          res.json({
            message: `Pet with id ${req.params.petId} was removed successfully.`,
          });
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
