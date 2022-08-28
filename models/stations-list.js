"use strict";

const logger = require('../utils/logger');


const stationsList = {
  title: 'Tramore',
  readings: [
    {
      code: 800,
      temp: 0.5,
      windSpeed: 2.0
    },
     {
      code: 900,
      temp: 0.5,
      windSpeed: 6.0
    },
    {
      code: 700,
      temp: 8.2,
      windSpeed: 3.0
    }
  ],
};

module.exports = stationsList;
