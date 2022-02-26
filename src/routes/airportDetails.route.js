const express = require('express');
const router = express.Router();
const {specificAirportHandler} = require('../handlers/airportDetails.handler')

router.get('/', specificAirportHandler);

module.exports={
    airportRoute:router
}