var express = require('express');

var app = express();
app.use(express.static('.'));


app.listen(process.env.PORT || 3001, function() { console.log('Server started...')});
