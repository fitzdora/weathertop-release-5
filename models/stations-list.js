"use strict";


const _ = require('lodash');
const JsonStore = require('./json-store');
//const logger = require("../utils/logger");

const fullStationsList = {

store: new JsonStore('./models/stations-list.json', {stationsList:  [] }),
collection: 'stationsList',
  
  getAllStations() {
    
    return this.store.findAll(this.collection);
  },
  
  getStations(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addStations(stationsList){
    this.store.add(this.collection, stationsList);
    this.store.save();
  },

  removeStations(id) {
    const stationsList = this.getStations(id);
    this.store.remove(this.collection, stationsList);
    this.store.save();
  },

  removeAllStations(){
    this.store.removeAll(this.collection);
    this.store.save();
  },

  addReadings (id, reading) {
    const stationsList = this.getStations(id);
    stationsList.readings.push(reading);
    this.store.save();
  },

  removeReadings(id, readingsId) {
    const stationsList = this.getStations(id);
    const readings = stationsList.readings;
    _.remove(readings, { id: readingsId });
    this.store.save();
  },
  getUserStations(userid){
  return this.store.findBy(this.collection, { userid: userid });
  },
};
  
module.exports = fullStationsList;
