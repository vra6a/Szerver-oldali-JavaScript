const express = require('express');
const app = express();

app.use(express.static('static'));

var server = app.listen(3000, function () {
	console.log('A Festicket elstartolt! jegyek a localhost:3000-on');
});
