const express = require('express');
const clientRouter = require('./routes/Client');
const animalRouter = require('./routes/Animal');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.set('json spaces', 40);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', clientRouter);
app.use('/', animalRouter);

app.listen(port, () => console.log(`[OK] http://localhost:${port}`));