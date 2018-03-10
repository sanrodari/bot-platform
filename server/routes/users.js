const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const router = express.Router();

const localStrategyAuth = require('../utils/localStrategy');
const jwtStrategy = require('../utils/jwtStrategy');

router.get('/', (req, res) => {
  const Kitty = mongoose.model('Kitty');
  Kitty.find(data => {
    console.log(data);
  });
  res.json({
    users: ['test', 'test2'],
  });
});

router.post(
  '/login',
  localStrategyAuth,
  (req, res) => {
    const { user: { id } } = req;
    const jwtSecret = process.env.JWT_SECRET;

    res.json({
      token: jsonwebtoken.sign({ id }, jwtSecret),
    });
  },
);

router.get(
  '/me',
  jwtStrategy,
  (req, res) => {
    const { user: { email } } = req;
    res.json({
      email,
    });
  },
);

module.exports = router;
