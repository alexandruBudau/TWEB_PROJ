const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const rateLimiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Security & optimization middlewares
app.use(helmet());
app.use(compression());

// Logging
app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: [
        "http://localhost:3000", // maybe unnecessary for frontend, keep for testing
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    credentials: true
}));

// Rate limiter (basic protection)
app.use(rateLimiter);

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const movieRoutes = require("./routes/movieRoutes");
app.use("/api", movieRoutes);


// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`✅ Central server running at http://localhost:${PORT}`);
});

module.exports = app;
