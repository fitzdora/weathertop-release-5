"use strict";

const logger = require("../utils/logger");
const fullStationList = require("../models/playlist-store.js");

const stationlist = {
  index (request, response){
    const viewData = {
      title: 'StationList',
    };
    response.render('stationlist', viewData);
  },
};

module.exports = stationlist;