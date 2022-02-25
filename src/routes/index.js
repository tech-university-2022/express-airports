const express = require('express');

const router = express.Router();
const { rootHandler } = require('../handlers/index');

router.get('/', rootHandler);
module.exports = {
  rootRouter: router,
};
