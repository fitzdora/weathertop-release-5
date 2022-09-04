"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");

const stationsList = {
  index (request, response){
    const stationsId = request.params.id
    logger.info('Stations ID = ' + stationsId);
    const viewData = {
      title: 'StationsList',
      stations: fullStationsList.getStations(stationsId),
    };
    logger.info('About to render', fullStationsList)
    response.render('stationslist', viewData);
  },
};

module.exports = stationsList;