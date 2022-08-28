"use strict";

const logger = require('../utils/logger');


const tramore = {
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
    },
  ],
};

const cobh = {
  title: 'Cobh',
  readings: [
    {
      code: 300,
      temp: 3.4,
      windSpeed: 5.0
    },
     {
      code: 300,
      temp: 5.5,
      windSpeed: 6.0
    },
    {
      code: 400,
      temp: 2.2,
      windSpeed: 9.0
    },
  ],
};

const waterford = {
  title: 'Waterford',
  readings: [
    {
      code: 200,
      temp: 7.5,
      windSpeed: 1.0
    },
     {
      code: 300,
      temp: 0.2,
      windSpeed: 7.0
    },
    {
      code: 500,
      temp: 3.2,
      windSpeed: 7.0
    },
  ],
};

const stationsList = [tramore, cobh, waterford];

module.exports = stationsList;
