"use strict";

const logger = require("../utils/logger");
//const stationAnalytics =("../utils/station-analytics");
const fullStationsList = require("../models/stations-list");
const uuid = require("uuid");

const stationsList = {
  index (request, response){
    const stationsListId = request.params.id;
    logger.debug('Stations ID = ' + stationsListId);

    //call to stationAnalytics Method (to be changed)
    //const stationsList = fullStationsList.getStations(stationsListId);
    //const lowestPressure = stationAnalytics.getLowestPressure(stationsList);
   // console.log(lowestPressure);

    const viewData = {
      title: 'StationsList',
      stations: fullStationsList.getStations(stationsListId),
      //this is the pass to the view
      //lowestPressure: lowestPressure
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
    //system not liking above variable for some reason - seem to work fine without it.
    const newReadings = {
      //this refers to field values
      id: uuid.v1(),
      code: Number(request.body.code),
      temp: Number(request.body.temp),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
      windDirection: Number(request.body.windDirection)
    };
    logger.debug('New Readings = ', newReadings);
    fullStationsList.addReadings(stationsListId, newReadings);
    response.redirect('/stations/' + stationsListId);
  }

};

module.exports = stationsList;