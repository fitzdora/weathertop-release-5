"use strict";

const logger = require("../utils/logger");
const stationsList = require("../models/stations-list.js")

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Weathertop Dashboard",
      stations: stationsList,
    };
    logger.info('About to render', stationsList)
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
