const express = require('express');
const { airportHandler } = require('../handlers/airport.handler');

const airportRouter = express.Router();
airportRouter.get('/', airportHandler);
module.exports = { airportRouter };
