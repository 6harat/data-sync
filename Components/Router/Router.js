var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.send('Data-Sync');
});
app.listen(8053);

module.exports.app;