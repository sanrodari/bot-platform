const mongoose = require('mongoose');

const KittySchema = mongoose.Schema({
  name: String,
});
mongoose.model('Kitty', KittySchema);
