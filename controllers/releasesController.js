const Release = require('../models/Releases');

exports.getAllReleases = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const releases = await Release.find().skip(skip).limit(limit);

        //Add total count for frontend pagination
        const total = await Release.countDocuments();

        res.json({
            data: releases,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};