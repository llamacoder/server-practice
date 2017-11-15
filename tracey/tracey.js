const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api', function(req,res,next){
  res.send()
})
app.listen(port, function(){
  console.log("hi from the server");
})
