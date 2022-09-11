"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");
const uuid = require("uuid");
const accounts = require("./accounts.js");
const axios = require("axios");
const oneCallRequest = `http://api.openweathermap.org/data/2.5/weather?q=Tromsø,NO&appid=b64beb976199c407ebc92add9ca6c10e`;

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Weather Top Dashboard",
      stations: fullStationsList.getUserStations(loggedInUser.id)
    };
    logger.info("About to render", fullStationsList.getAllStations());
    response.render("dashboard", viewData);
  },

  deleteStations(request, response) {
    const stationsListId = request.params.id;
    logger.debug(`Deleting Stations ${stationsListId}`);
    fullStationsList.removeStations(stationsListId);
    response.redirect("/dashboard");
  },

  addStations(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      stationLocation: request.body.stationLocation,
      readings: []
    };
    logger.debug("Creating a new Station Location =", newStation);
    fullStationsList.addStations(newStation);
    response.redirect("/dashboard");
  },

  async addReport(request, response) {
    logger.info("rendering new report");
    let report = {};
    const result = await axios.get(oneCallRequest);
    if (result.status == 200) {
      const reading = result.data.current;
      report.code = reading.weather[0].id;
      report.temp = reading.temp;
      report.windSpeed = reading.wind_speed;
      report.pressure = reading.pressure;
      report.windDirection = reading.wind_Deg;
    }
    console.log(report);
    const viewData = {
      title: "Weather Report",
      reading: report
    };
    response.render("dashboards", viewData);
  }
};

module.exports = dashboard;
