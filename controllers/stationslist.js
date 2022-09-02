"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list.js");

const stationslist = {
  index (request, response){
    const viewData = {
      title: 'StationsList',
    };
    response.render('stationslist', viewData);
  },
};

module.exports = stationslist;