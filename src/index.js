const express = require('express');
const env = require('dotenv');
const { getAirportDetailsRouter } = require('./routes/getAirportDetails.route');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/airports', getAirportDetailsRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
