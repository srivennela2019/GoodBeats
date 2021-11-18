const express = require("express");
const router = express.Router();
const helpers = require('../helpers/helpers');

router.get('/search',helpers.searchItems)
      .get('/search/types', helpers.searchTypes);

module.exports = router;