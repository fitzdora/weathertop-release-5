"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list.js");

const stationsList = {
  index (request, response){
    const viewData = {
      title: 'StationsList',
    };
    response.render('stationlist', viewData);
  },
};

module.exports = stationsList;