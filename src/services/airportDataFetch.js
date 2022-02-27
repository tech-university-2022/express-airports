const airportsData = require('../fixtures/airportData.json');

const airportInformation = (airportCode) => {
  if (typeof airportCode !== 'string') { throw Error(`${airportCode} not a string`); }
  // eslint-disable-next-line max-len
  const airportDetails = airportsData.filter((airport) => airport.code === airportCode.toUpperCase());
  if (airportDetails.length === 0) { return ('airport not in database'); }
  const { name, city, country } = airportDetails[0];
  return { name, city, country };
};
// console.log(airportInformation('blr'));

module.exports = { airportInformation };
