const express = require( 'express' );
const app = express();
const chalk = require( 'chalk' );
const volleyball = require( 'volleyball' );
const nunjucks = require("nunjucks");
const routes = require("./routes");

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

app.use(volleyball);
app.use('/', routes);
app.use(express.static('public'))
