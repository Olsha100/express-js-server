require('dotenv').config()

const express = require('express');


const app = express();

let PORT_NUMBER = process.env.PORT_NUMBER;

app.listen(PORT_NUMBER);
console.log('Server is listening on port ' + PORT_NUMBER)


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', {root: __dirname});
})