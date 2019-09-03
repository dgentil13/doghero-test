const express = require('express');
const passport = require('passport');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Bcrypt to encrypt passwords
const bcryptSalt = 10;

// Sign up
router.post('/signup', (req, res) => {
  // User SignUp as a Client
  if (req.body.role === 'Client') {
    const { email, password, fullName, number, role } = req.body;

    if (!email || !password || !number || !fullName) {
      res
        .status(400)
        .json({ message: 'Provide email, password and your name' });
      return;
    }

    if (password.length < 7) {
      res.status(400).json({
        message:
          'Please make your password at least 8 characters long for security purposes.',
      });
      return;
    }

    User.findOne({ email }, 'email', (err, user) => {
      if (err) {
        res.status(500).json({ message: 'Email check went bad.' });
        return;
      }

      if (user) {
        res.status(400).json({ message: 'Email already in use.' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email,
        password: hashPass,
        fullName,
        number,
        role,
      });

      newUser.save(err => {
        if (err) {
          res
            .status(400)
            .json({ message: 'Saving user to database went wrong.' });
          return;
        }

        // Automatically log in user after sign up
        req.login(newUser, err => {
          if (err) {
            res.status(500).json({ message: 'Login after signup went bad.' });
            return;
          }
          res.status(200).json(newUser);
        });
      });
    });
  }
  // User SignUp as a Walker
  if (req.body.role === 'Walker') {
    const { email, password, fullName, number, address, role } = req.body;

    if (!email || !password || !number || !fullName || !address) {
      res
        .status(400)
        .json({ message: 'Provide email, password and your name' });
      return;
    }

    if (password.length < 7) {
      res.status(400).json({
        message:
          'Please make your password at least 8 characters long for security purposes.',
      });
      return;
    }

    User.findOne({ email }, 'email', (err, user) => {
      if (err) {
        res.status(500).json({ message: 'Email check went bad.' });
        return;
      }

      if (user) {
        res.status(400).json({ message: 'Email already in use.' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email,
        password: hashPass,
        fullName,
        number,
        address,
        role,
      });

      newUser.save(err => {
        if (err) {
          res
            .status(400)
            .json({ message: 'Saving user to database went wrong.' });
          return;
        }

        // Automatically log in user after sign up
        req.login(newUser, err => {
          if (err) {
            res.status(500).json({ message: 'Login after signup went bad.' });
            return;
          }
          res.status(200).json(newUser);
        });
      });
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong when authenticating user' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

// Check logged user
router.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
