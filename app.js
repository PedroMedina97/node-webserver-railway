require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()

const port = process.env.PORT;
//Servir contenido estático

app.use(express.static('site'));


/* app.get('/', function (req, res) {
  res.send('Home Page')
}); */

app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/site/elements.html');
});

app.get('/generic', function(req, res){
  res.sendFile(__dirname+'/site/generic.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/site/index.html')
});

app.listen(port)