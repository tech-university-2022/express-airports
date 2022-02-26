const airportData = require('airportDetails');
const specificAirportInfo = async (airportCode) => {
    try {
        const airportDetail = airportData.airportInfo(airportCode);
        return airportDetail;
    } catch (error) {
        console.error(error);
    }
}

module.exports={
    specificAirportInfo
}