const express = require( 'express' );
const app = express();

app.listen(3000, function() {
  console.log("Hi, I'm listening!");
})

app.get('/home', function(request, response) {
  response.send("This is the home page.");   
})
