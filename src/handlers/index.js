const handler = (req, res) => {
  res.json({
    message: 'Please enter airport code as query parameter!',
  }).status(200);
};

module.exports = {
  rootHandler: handler,
};
