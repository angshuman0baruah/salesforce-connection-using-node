var express = require('./lib/express');
var app = express();
app.listen(9005, function(){
  console.log('Connected to port 9005 for Salesforce! Developer : Angshuman Baruah');
});
module.exports = app;
