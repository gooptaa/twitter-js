const express = require( 'express' );
const app = express();
const chalk = require( 'chalk' );
const volleyball = require( 'volleyball' );
const nunjucks = require("nunjucks")

var locals = {
    title: 'TwitterApp',
    people: [
        { name: 'Tina'},
        { name: 'Christopher' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});

app.listen(3000, function() {
  console.log(chalk.bgGreen("Hi, I'm listening!"));
})

// app.use(function (request, response, next) {
//     console.log(chalk.cyan(request.method + " " + request.originalUrl + " " + response.statusCode));
//     next();
// })
app.use(volleyball);

app.use('/special', function(request, response) {
  response.send("You've reached the special area.")
})

app.get('/home', function(request, response) {
  response.render('index', locals, function(err, html){
    if (err) throw err;
    response.send(html)
  });
})

app.get('/news', function(request, response) {
  response.render("index", locals, function(err, html){
    if (err) throw err;
    response.send(html)
  })
})

