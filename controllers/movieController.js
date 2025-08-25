const movieService = require("../services/movieService");
console.log("📍 movieController.js loaded");

async function getAllMovies(req, res, next) {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json({ data: movies });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getMovieById(req, res, next) {
    try {
        const id = req.params.id;
        const movie = await movieService.getMovieById(id);
        res.status(200).json({ data: movie });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllActors(req, res, next) {
    try {
        const actors = await movieService.getAllActors();
        res.status(200).json({ data: actors });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllCrew(req, res, next) {
    try {
        const crew = await movieService.getAllCrew();
        res.status(200).json({ data: crew });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllCountries(req, res, next) {
    try {
        const countries = await movieService.getAllCountries();
        res.status(200).json({ data: countries });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllGenres(req, res, next) {
    try {
        const genres = await movieService.getAllGenres();
        res.status(200).json({ data: genres });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllLanguages(req, res, next) {
    try {
        const languages = await movieService.getAllLanguages();
        res.status(200).json({ data: languages });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllPosters(req, res, next) {
    try {
        console.log("📍 postersController.js loaded");
        const posters = await movieService.getAllPosters();
        res.status(200).json({ data: posters });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllStudios(req, res, next) {
    try {
        const studios = await movieService.getAllStudios();
        res.status(200).json({ data: studios });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllThemes(req, res, next) {
    try {
        const themes = await movieService.getAllThemes();
        res.status(200).json({ data: themes });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllOscarAwards(req, res, next) {
    try {
        const awards = await movieService.getAllOscarAwards();
        res.status(200).json({ data: awards });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllReviews(req, res, next) {
    try {
        const reviews = await movieService.getAllReviews();
        res.status(200).json({ data: reviews });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

async function getAllReleases(req, res, next) {
    try {
        const releases = await movieService.getAllReleases();
        res.status(200).json({ data: releases });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        next(error);
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    getAllActors,
    getAllCrew,
    getAllCountries,
    getAllGenres,
    getAllLanguages,
    getAllPosters,
    getAllStudios,
    getAllThemes,
    getAllOscarAwards,
    getAllReviews,
    getAllReleases,
};
