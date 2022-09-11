"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");
const uuid = require("uuid");
const accounts = require("./accounts.js");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Weather Top Dashboard",
      stations: fullStationsList.getUserStations(loggedInUser.id),
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
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      stationLocation: request.body.stationLocation,
      readings: [],
    };
    logger.debug('Creating a new Station Location =', newStation);
    fullStationsList.addStations(newStation);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;
