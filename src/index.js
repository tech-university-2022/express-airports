const express = require('express');
const env = require('dotenv');

const { airportRouter } = require('./routes/airport.router');
const { rootRouter } = require('./routes/index');

env.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const app = express();

app.use('/', rootRouter);
app.use('/airport-details', airportRouter);

app.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
