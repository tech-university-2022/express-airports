const { getAirportDetails } = require('../services/getAirportDetails.service');

const getAirportDetailsHandler = async (req, res) => {
  const airportCode = req.query.airportCode;
  const airportDetails = await getAirportDetails(airportCode);
  res.json({
    airportDetails,
  }).status(200);
};

module.exports = {
    getAirportDetailsHandler,
};
