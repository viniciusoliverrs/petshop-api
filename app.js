const express = require('express');
const clientRouter = require('./routes/Client');
const animalRouter = require('./routes/Animal');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', clientRouter);
app.use('/', animalRouter);

app.listen(port, () => console.log(`[OK] http://localhost:${port}`));