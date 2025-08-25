const express = require('express');
const cors = require('cors');  // ✅ ADD THIS
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/db');
const releaseRoutes = require('./routes/releaseRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
connectDB();

//
app.use(cors({
    origin: [
        "http://localhost:3000",  //
        "http://127.0.0.1:3000"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));

app.use(express.json());

app.use('/api/releases', releaseRoutes);
app.use('/api/rotten_tomatoes_reviews', reviewRoutes);

app.listen(PORT, '127.0.0.1', () => console.log(`Server running on port ${PORT}`));
