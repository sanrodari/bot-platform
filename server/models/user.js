const moongose = require('mongoose');

const userSchema = moongose.Schema({
  email: String,
  password: String,
});
moongose.model('User', userSchema);
