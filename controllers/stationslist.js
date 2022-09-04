"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");

const stationsList = {
  index (request, response){
    const stationsListId = request.params.id;
    logger.info('Stations ID = ' + stationsListId);
    const viewData = {
      title: 'StationsList',
      stations: fullStationsList.getStations(stationsListId),
    };
    logger.info('About to render', fullStationsList);
    response.render('stationslist', viewData);
  },
};

module.exports = stationsList;