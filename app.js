// var bodyParser = require("body-parser");
var express = require('express');
var app = express();
var routes_v1 = require('./src/routes/v1/routes_v1')
 
app.get('/', function (req, res){
   res.send({
      name: 'Yatika Tyagi',
      designation: 'Senior Software engineer'
   });
});

app.use('/api/v1', routes_v1);
app.use(express.json());
var port = 3001;
app.listen(port);
console.log('App is runing on port' + ' ' + port);