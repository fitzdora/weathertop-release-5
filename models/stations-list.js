"use strict";


const _ = require('lodash');
const JsonStore = require('./json-store');
//const logger = require("../utils/logger");

const fullStationsList = {

store: new JsonStore('./models/stations-list.json', {fullStationsList:  []}),
stationsList: require("./stations-list.json").stationsList,
  
  getAllStations() {
    
    return this.stationsList;
  },
  
  getStations(id) {
    return _.find(this.stationsList, { id: id });
  },
  
  removeReadings(id, readingsId) {
    const stationsList = this.getStations(id);
    _.remove(stationsList.readings, { id: readingsId });
    
  },
  
  removeStations(id) {
    _.remove(this.stationsList, { id: id });
    
  },

  addReadings (id, reading) {
    const stationsList = this.getStations(id);
    stationsList.readings.push(reading);
  },

  addStations(stationLocation){
  this.stationsList.push(stationLocation);
  }
};
  
module.exports = fullStationsList;
