const express = require('express');
const env = require('dotenv');
const { airportRouter } = require('./routes/airport.route');

const app = express();
env.config();
const port = process.env.PORT || 3000;
const host = 'localhost';
app.use('/airport-details', airportRouter);

app.listen(port, host, () => {
  console.log(`server listening. visit http://${host}:${port}/airport-details?airport-code=del`);
});
