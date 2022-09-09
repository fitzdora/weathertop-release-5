"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");
const uuid = require("uuid");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Weather Top Dashboard",
      stations: fullStationsList.getAllStations(),
    };
    logger.info('About to render', fullStationsList.getAllStations());
    response.render("dashboard", viewData);
  },
  
  deleteStations(request, response) {
    const stationsListId = request.params.id;
    logger.debug(`Deleting Stations ${stationsListId}`);
    fullStationsList.removeStations(stationsListId);
    response.redirect("/dashboard");
  },

  addStations(request, response){
    const newStation = {
      id: uuid.v1(),
      stationLocation: request.body.stationLocation,
      readings: [],
    };
    logger.debug('New Station Location =', newStation);
    fullStationsList.addStations(newStation);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;
