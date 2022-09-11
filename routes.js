"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const stationslist = require("./controllers/stationslist.js");
const accounts = require("./controllers/accounts.js");
const readings = require("./controllers/readings.js");

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout );

router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

//router.get("/", dashboard.index);
// replaced with login.hbs
router.get("/dashboard", dashboard.index);
router.get("/dashboard/deletestations/:id", dashboard.deleteStations);
router.post("/dashboard/addstations", dashboard.addStations);

router.get("/about", about.index);

router.get("/stations/:id", stationslist.index);
router.get("/stations/:id/deletereadings/:readingsid", stationslist.deleteReadings);
router.post("/stations/:id/addreadings", stationslist.addReadings);

router.get("/readings/:id/editreadings/:readingsid", readings.index);
router.post("/readings/:id/updatereadings/:readingsid", readings.update);

module.exports = router;
