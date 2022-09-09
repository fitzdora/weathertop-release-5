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

  addReadings (request, response){
    const stationsListId = request.params.id;
    const stations = fullStationsList.getStations(stationsListId);
    //system not liking above variable for some reason
    const newReadings = {
      //this should refer to field values
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      pressure: request.body.pressure,
    };
    fullStationsList.addReadings(stationsListId, newReadings);
    response.redirect('/stations/' + stationsListId);
  },

};

module.exports = stationsList;