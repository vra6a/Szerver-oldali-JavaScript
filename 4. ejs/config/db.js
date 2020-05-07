const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/h0gzqy', { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;