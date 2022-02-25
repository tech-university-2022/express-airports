const url = require('url');
const airportService = require('../services/airportDetailsRetriever');

const handler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const airportCode = url.parse(req.url, true).query['airport-code'];
  try {
    const airportDetails = airportService.getAirportInformation(airportCode);
    res.json(airportDetails).status(200);
  } catch (err) {
    res.json({ Error: 'Could not find!' }).status(400);
  }
};

module.exports = {
  airportHandler: handler,
};
