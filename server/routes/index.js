const express = require('express');

const users = require('./users');
const bots = require('./bots');
const jwtStrategy = require('../utils/jwtStrategy');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
  });
});

router.use('/users', users);
router.use('/bots', jwtStrategy, bots);

module.exports = router;
