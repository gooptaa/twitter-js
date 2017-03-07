const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require( 'path' );

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;


// router.get('/stylesheets/style.css', function(request, response) {
//   response.sendFile('style.css', { root: path.join(__dirname, '../public/stylesheets') })
//  });

// app.get('/home', function(request, response) {
//   response.render('index', locals, function(err, html){
//     if (err) throw err;
//     response.send(html)
//   });
// })
//
// app.get('/news', function(request, response) {
//   response.render("index", locals, function(err, html){
//     if (err) throw err;
//     response.send(html)
//   })
// })
