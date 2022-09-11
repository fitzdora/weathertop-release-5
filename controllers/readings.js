"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");
//const { read } = require("fs-extra");

const readings = {

    index(request, response) {
      const stationsListId = request.params.id;
      const readingsId = request.params.readingsid;
      logger.debug(`Editing Readings ${readingsId} from Stations ${stationsListId}`);
      const viewData = {
        title: "Edit Readings",
        stationsList: fullStationsList.getStations(stationsListId),
        readings: fullStationsList.getReadings(stationsListId, readingsId)

      };
      response.render("readings", viewData);
    },

    update(request, response) {
      const stationsListId =  request.params.id;
      const readingsId = request.params.readingsid;
      const readings = fullStationsList.getReadings(stationsListId, readingsId);
      const newReadings = {
        code: Number(request.body.code),
        temp: Number(request.body.temp),
        windSpeed: Number(request.body.windSpeed),
        pressure: Number(request.body.pressure),
        windDirection:  Number(request.body.windDirection)
      };
      logger.debug(`Updating Readings ${readingsId} from Stations ${stationsListId}`);
      fullStationsList.updateReadings(readings, newReadings);
      response.redirect("/stations/" + stationsListId);
    }
};
module.exports = readings;