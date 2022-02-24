const express = require('express');
const url = require('url');
const airportInfo = require('./utils/airportDetailsRetriever');

const PORT = 3000;
const HOST = 'localhost';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, please enter Airport code in the url as a query!');
});
app.get('/airport-details', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const airportCode = url.parse(req.url, true).query['airport-code'];
  const airportDetails = airportInfo.getAirportInformation(airportCode);
  console.log(airportDetails);
  res.end(JSON.stringify(airportDetails));
});
app.listen(PORT, HOST, () => {
  console.log(`Server started. Visit http://${HOST}:${PORT}`);
});
