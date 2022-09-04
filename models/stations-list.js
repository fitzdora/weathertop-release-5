"use strict";

const logger = require("../utils/logger");

const fullStationsList = {

stationsList: require("./stations-list.json").stationsList,
  
  getAllStations(){
    
    return this.stationslist;
  },
  
  getStations(id){
    let foundStations = null;
    for (let stationslist of this.stationsList) {
      if (id == stationslist.id){
        foundStations = stations;
      }
    }
    
    return foundStations;
    
  },
};
  
module.exports = fullStationsList;
