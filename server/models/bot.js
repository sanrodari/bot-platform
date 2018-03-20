const mongoose = require('mongoose');

const botSchema = mongoose.Schema({
  title: String,
  body: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
mongoose.model('Bot', botSchema);
