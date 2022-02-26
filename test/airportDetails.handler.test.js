const {specificAirportHandler} = require("../src/handlers/airportDetails.handler");

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

//   describe('airportDetailsHandler function', () => {
//     test('should airport details of the particular airport code', async () => {
//       const req = { params: { airportcode: 'ABC' } }
//       const res = mockResponse();
//       console.log(res.json)
//       await specificAirportHandler(req, res);
//       expect(res.json).toHaveBeenCalledWith({"specificAirport":{"name":"Los Llanos","city":"Albacete","country":"Spain"}});
//     });
//   });