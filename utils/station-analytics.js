"use strict";

const stationAnalytics = {

  getLowestPressure(stationsList) {
    let lowestPressure = null;
    if(stationsList.readings.length > 0) {
      lowestPressure = stationsList.readings[0];
     for (let i =1; i < stationsList.readings.length; i++) {
      if (stationsList.readings[i].pressure < lowestPressure.pressure) {
      lowestPressure = stationsList.readings[i];
    }
  }
}
return lowestPressure;
}
};

module.exports = stationAnalytics;