const express = require('express');

const cors = require('cors');
const router = require('./router');
const db = require('./db')

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/', router);

module.exports = app;