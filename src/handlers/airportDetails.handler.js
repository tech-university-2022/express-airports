const {specificAirportInfo} = require("../services/airportDetails.service") 

const specificAirportHandler = async(req,res) =>{
    try {
        const airportCode = req.query.airportcode
      const specificAirport = await specificAirportInfo(airportCode);
      res.json({
        specificAirport
      }).status(200);
    } catch (error) {
      console.error(error);
    }
  }

module.exports={
    specificAirportHandler
}