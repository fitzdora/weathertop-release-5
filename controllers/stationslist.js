"use strict";

const logger = require("../utils/logger");
const fullStationsList = require("../models/stations-list");
const uuid = require("uuid");

const stationsList = {
  index (request, response){
    const stationsListId = request.params.id;
    logger.debug('Stations ID = ' + stationsListId);
    const viewData = {
      title: 'StationsList',
      stations: fullStationsList.getStations(stationsListId),
    };
    logger.info('About to render', fullStationsList);
    response.render('stationslist', viewData);
  },
  
  deleteReadings(request, response) {
    const stationsListId = request.params.id;
    const readingsId = request.params.readingsid;
    logger.debug(`Deleting Reading ${readingsId} from Stations ${stationsListId}`);
    fullStationsList.removeReadings(stationsListId, readingsId);
    response.redirect('/stations/' + stationsListId);
  },

  addReadings: function(request, response) {
    const stationsListId = request.params.id;
    const stationsList = fullStationsList.getStations(stationsListId);
    //system not liking above variable for some reason
    const newReadings = {
      //this should refer to field values
      id: uuid.v1(),
      code: Number(request.body.code),
      temp: Number(request.body.temp),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure)
    };
    logger.debug('New Readings = ', newReadings);
    fullStationsList.addReadings(stationsListId, newReadings);
    response.redirect('/stations/' + stationsListId);
  }

};

module.exports = stationsList;