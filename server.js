var express = require('express');

//create our app
var app=express();

app.use(express.static('public'));

app.listen(5000,function () {
  console.log('Express server is up on port 5000');
});
