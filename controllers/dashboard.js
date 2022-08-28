"use strict";

const logger = require("../utils/logger");

const stationsList = {
  title: 'Tramore',
  readings: [
    {
      code: 800,
      temp: 0.5,
      windSpeed: 2.0
    },
     {
      code: 900,
      temp: 0.5,
      windSpeed: 6.0
    }
    
  ]
}

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Weathertop Dashboard",
      stations: stationsList
    };
    logger.info('a')
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
