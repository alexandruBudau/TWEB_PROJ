// routes/releaseRoutes.js
const express = require('express');
const router = express.Router();
const Release = require('../models/Releases');

router.get('/', async (req, res) => {
    try {
        const releases = await Release.find({});
        res.status(200).json({ data: releases });
    } catch (err) {
        console.error("❌ Error fetching releases:", err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
