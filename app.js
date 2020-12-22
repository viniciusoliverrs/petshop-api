const express = require('express');
const clientRouter = require('./routes/Client');
const animalRouter = require('./routes/Animal');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', clientRouter);
app.use('/', animalRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});