"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list.js");

const stationsList = {
  index (request, response){
    const stationsListId = request.params.id
    logger.info('StationsList ID = ' + stationsListId);
    const viewData = {
      title: 'StationsList',
    };
    response.render('stationslist', viewData);
  },
};

module.exports = stationsList;