require('dotenv').config()

const express = require('express');


const app = express();

let PORT_NUMBER = process.env.PORT_NUMBER;

app.listen(PORT_NUMBER);
console.log('Server is listening on port ' + PORT_NUMBER)



// Define where static files are stored

app.use(express.static('public'));


/*******  GET requests ********/

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', {root: __dirname});
})

/*******  POST requests ********/

const bodyParser = require('body-parser');

app.use(bodyParser.text());

app.post('/', (req,res) => {
    console.log(req.body);
    res.sendFile('./pages/thankYouPage.html', {root: __dirname});
})