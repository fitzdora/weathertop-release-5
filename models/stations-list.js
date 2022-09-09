"use strict";


const _ = require('lodash');
//const logger = require("../utils/logger");

const fullStationsList = {

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

  addReadings (id, readings) {
    const stationsList = this.getStations(id);
    stationsList.readings.push(readings);
  },

  addStations(stations){
  this.stationsList.push(stations);
  }


};
  
module.exports = fullStationsList;
