const express = require('express');
const { getAirportDetailsHandler } = require('../handlers/getAirportDetails.handler');

const getAirportDetailsRouter = express.Router();
getAirportDetailsRouter.get('/?', getAirportDetailsHandler);

module.exports = {
  getAirportDetailsRouter,
};
