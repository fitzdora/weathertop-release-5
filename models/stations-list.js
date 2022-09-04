"use strict";

//const logger = require("../utils/logger");

const fullStationsList = {

stationsList: require("./stations-list.json").stationsList,
  
  getAllStations(){
    
    return this.stationsList;
  },
  
  getStations(id){
    let foundStations = null;
    for (let stationsList of this.stationsList) {
      if (id == stationsList.id){
        foundStations = stationsList;
      }
    }
    
    return foundStations;
    
  },
};
  
module.exports = fullStationsList;
