const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('views'));

require('./route/index')(app);

app.listen(3002, function() {
    console.log('A Festicket elstartolt! jegyek a localhost:3000-on');
});
