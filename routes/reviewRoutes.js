// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review'); // or whatever your model is

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ data: reviews });
    } catch (err) {
        console.error("❌ Error fetching reviews:", err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
