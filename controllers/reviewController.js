const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const reviews = await Review.find().skip(skip).limit(limit);

        // Add total count for frontend pagination
        const total = await Review.countDocuments();

        res.json({
            data: reviews,
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