const mongoose = require('mongoose');
require('./kitty');
require('./user');

mongoose.connect('mongodb://localhost/bot');
