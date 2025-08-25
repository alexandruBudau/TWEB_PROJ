const mongoose = require('mongoose');

const releaseSchema = new mongoose.Schema({
    csv_id: String,  // store the original CSV _id
    id: Number,
    country: String,
    date: Date,
    type: String,
    rating: String,
}, { collection: 'releases' });

module.exports = mongoose.model('Release', releaseSchema);
