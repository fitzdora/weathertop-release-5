"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const stationslist = require("./controllers/stationslist.js");

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get("/stations/:id", stationslist.index);
router.get("/stations/:id/deletereadings/:readingsid", stationslist.deleteReading);

module.exports = router;
