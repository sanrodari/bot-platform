const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});
mongoose.model('User', userSchema);
