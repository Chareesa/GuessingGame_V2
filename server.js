var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));

app.listen(port);

console.log('server running on port ' + port);
