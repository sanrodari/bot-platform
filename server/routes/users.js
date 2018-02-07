const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  const Kitty = mongoose.model('Kitty');
  Kitty.find(data => {
    console.log(data);
  });
  res.json({
    users: ['test', 'test2'],
  });
});

module.exports = router;
