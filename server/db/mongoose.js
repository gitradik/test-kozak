const mongoose = require('mongoose');
require('../models');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

mongoose.set('debug', true);

module.exports = mongoose;