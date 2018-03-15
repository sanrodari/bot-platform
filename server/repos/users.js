const mongoose = require('mongoose');

const User = mongoose.model('User');

function findUserByEmail(email) {
  return User.findOne({
    email,
  });
}

function findUserById(id) {
  return User.findOne({
    id,
  });
}

module.exports = {
  findUserByEmail,
  findUserById,
};
