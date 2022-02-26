const express = require('express');
const { healthRouter } = require('./routes/health.route');
const { airportRoute } = require('./routes/airportDetails.route');


const port = process.env.PORT || 3000;
const app = express();

app.use('/health', healthRouter);
app.use('/airport-details',airportRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});;