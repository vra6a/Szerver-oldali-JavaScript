const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/h0gzqy', { useNewUrlParser: true });

module.exports = mongoose;