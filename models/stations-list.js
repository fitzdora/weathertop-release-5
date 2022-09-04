"use strict";

//const logger = require("../utils/logger");

const fullStationsList = {

stationsList: require("./stations-list.json").stationsList,
  
  getAllStations(){
    
    return this.stationsList;
  },
  
  getStations(id){
    let foundStations = null;
    for (let stations of this.stationsList) {
      if (id == stations.id){
        foundStations = stations;
      }
    }
    
    return foundStations;
    
  },
};
  
module.exports = fullStationsList;
