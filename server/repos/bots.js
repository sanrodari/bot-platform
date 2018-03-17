const mongoose = require('mongoose');

const Bot = mongoose.model('Bot');

function findByUser(userId) {
  return Bot
    .find({ user: userId });
}

function create(user, params) {
  const bot = new Bot({
    ...params,
    user: user._id,
  });

  return bot
    .save();
}

function update(user, _id, params) {
  return Bot
    .updateOne({ _id, user: user._id }, params)
    .then(() => Bot.findOne({ _id, user: user._id }));
}

function findByUserAndId(user, _id) {
  return Bot
    .findOne({ _id, user: user._id });
}

function deleteByUserAndId(user, _id) {
  return Bot
    .deleteOne({ _id, user: user._id });
}

module.exports = {
  findByUser,
  create,
  update,
  findByUserAndId,
  deleteByUserAndId,
};
