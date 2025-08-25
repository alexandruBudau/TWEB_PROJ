//routes/index.js

const express = require("express");
const router = express.Router();

const movieRoutes = require("./movieRoutes");

// Remove the /api prefix - it's already added in server.js
router.use("/", movieRoutes);

module.exports = router;