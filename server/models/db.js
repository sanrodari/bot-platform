const mongoose = require('mongoose');
require('./user');
require('./bot');

mongoose.connect('mongodb://localhost/bot');
