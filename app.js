const express = require('express');
const clientRouter = require('./routes/Client');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', clientRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});