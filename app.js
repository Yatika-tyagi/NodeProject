var bodyParser = require("body-parser");
var express = require('express');
var app = express();
var routes_v1 = require('./src/routes/v1/routes_v1')
 
app.get('/', function (req, res){
   res.send({
      message: "Sorry, we are unable to fetch data"
   });
});

app.use('/api/v1', routes_v1);
app.use(bodyParser);
var port = 3001;
app.listen(port);
console.log('App is runing on port' + ' ' + port);