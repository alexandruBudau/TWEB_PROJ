const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const csv = require('csv-parser');

const Review = require('../models/Review');
const Release = require('../models/Releases');

const dbURI = 'mongodb://localhost:27017/cinecritic_the_matured_tomato'; // Replace yourdbname

async function connectDB() {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

async function importCSVToCollection(csvFilePath, Model) {
    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', async () => {
                try {
                    await Model.deleteMany({});
                    await Model.insertMany(results);
                    console.log(`Imported ${results.length} records from ${path.basename(csvFilePath)}`);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            })
            .on('error', (err) => reject(err));
    });
}

async function main() {
    await connectDB();

    try {
        await importCSVToCollection('../Jupyters/dataset/rotten_tomatoes_reviews.csv', Review);
        await importCSVToCollection('../Jupyters/dataset/releases.csv', Release);
    } catch (error) {
        console.error('Import error:', error);
    } finally {
        mongoose.connection.close();
    }
}

main();
