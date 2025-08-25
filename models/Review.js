const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rotten_tomatoes_link: String,
    movie_title: String,
    critic_name: String,
    top_critic: String,
    publisher_name: String,
    review_type: String,
    review_score: String,
    review_date: String,
    review_content: String
}, { collection: 'rotten_tomatoes_reviews' }); // ✅ Important

module.exports = mongoose.model('Review', reviewSchema);
