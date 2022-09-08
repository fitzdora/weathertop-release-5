"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Weathertop Dashboard",
      stations: fullStationsList.getAllStations(),
    };
    logger.info('About to render', fullStationsList.getAllStations());
    response.render("dashboard", viewData);
  },
  
  deleteStations(request, response) {
    const stationsListId = request.params.id;
    logger.debug('Deleting Stations ${stationsListId}');
    fullStationsList.removeStations(stationsListId);
    response.redirect('/dashboard/');
  },
};

module.exports = dashboard;
