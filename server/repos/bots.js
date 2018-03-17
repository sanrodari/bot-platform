const mongoose = require('mongoose');

const Bot = mongoose.model('Bot');

function findByUser(userId) {
  return Bot
    .find({ user: userId });
}

function create(userId, params) {
  const bot = new Bot({
    ...params,
    user: userId,
  });

  return bot
    .save();
}

async function update(userId, _id, params) {
  await Bot.updateOne({ _id, user: userId }, { ...params, updatedAt: new Date() });
  return Bot.findOne({ _id, user: userId });
}

function findByUserAndId(userId, _id) {
  return Bot
    .findOne({ _id, user: userId });
}

function deleteByUserAndId(userId, _id) {
  return Bot
    .deleteOne({ _id, user: userId });
}

module.exports = {
  findByUser,
  create,
  update,
  findByUserAndId,
  deleteByUserAndId,
};
