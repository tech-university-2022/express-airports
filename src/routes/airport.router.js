const express = require('express');

const router = express.Router();
const { airportHandler } = require('../handlers/airport.handler');

router.get('/', airportHandler);

module.exports = {
  airportRouter: router,
};
