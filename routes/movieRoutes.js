//movieRoutes

const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

console.log("📍 movieRoutes.js loaded");

// Movies
router.get("/movies", movieController.getAllMovies);
router.get("/movies/all", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);

// PostgreSQL endpoints (port 8080)
router.get("/actors", movieController.getAllActors);
router.get("/crew", movieController.getAllCrew);
router.get("/countries", movieController.getAllCountries);
router.get("/genres", movieController.getAllGenres);
router.get("/languages", movieController.getAllLanguages);
router.get("/posters", movieController.getAllPosters);
router.get("/studios", movieController.getAllStudios);
router.get("/themes", movieController.getAllThemes);
router.get("/the_oscar_awards", movieController.getAllOscarAwards); // Fixed path

// MongoDB endpoints (port 3001) - ADD THESE
router.get("/releases", movieController.getAllReleases);
router.get("/rotten_tomatoes_reviews", movieController.getAllReviews);

module.exports = router;