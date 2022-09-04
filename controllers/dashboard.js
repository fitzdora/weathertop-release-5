"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list.js")

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
};

module.exports = dashboard;
