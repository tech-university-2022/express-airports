const url = require('url');
const airportService = require('../services/airportDataFetch');

const airportHandler = async (req, res) => {
  res.set({ 'Content-Type': 'application/json' });
  const airportCode = url.parse(req.url, true).query['airport-code'];
  const airportDetails = await airportService.airportInformation(airportCode);
  res.json(airportDetails).status(200);
};

module.exports = { airportHandler };
