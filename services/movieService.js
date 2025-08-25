const { springBootAPI, expressMongoAPI } = require("../config/service");

async function getAllMovies() {
    try {
        console.log("🔍 Fetching movies from SpringBoot...");
        const moviesResponse = await springBootAPI.get("/api/movies/all");
        const movies = moviesResponse.data;
        console.log("✅ Movies fetched:", moviesResponse.status, `(${movies?.length} items)`);
        return movies;
    } catch (error) {
        console.error("❌ Error in getAllMovies:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url,
        });
        throw new Error("Failed to fetch movies data");
    }
}

async function getAllReviews() {
    try {
        console.log("🔍 Fetching reviews from Mongo...");
        const res = await expressMongoAPI.get("/api/rotten_tomatoes_reviews");
        console.log("✅ Reviews fetched:", res.status);
        return res.data.data;
    } catch (error) {
        console.error("❌ Failed to fetch reviews:", {
            message: error.message,
            url: error.config?.url,
        });
        throw new Error("Failed to fetch reviews");
    }
}

async function getAllReleases() {
    try {
        console.log("🔍 Fetching releases from Mongo...");
        const res = await expressMongoAPI.get("/api/releases");
        console.log("✅ Releases fetched:", res.status);
        return res.data.data;
    } catch (error) {
        console.error("❌ Failed to fetch releases:", {
            message: error.message,
            url: error.config?.url,
        });
        throw new Error("Failed to fetch releases");
    }
}

async function getMovieById(id) {
    try {
        console.log(`🔍 Fetching movie ${id}...`);

        const movieResponse = await springBootAPI.get(`/api/movies/${id}`);
        const reviewsResponse = await expressMongoAPI.get(`/api/rotten_tomatoes_reviews/${id}`);

        console.log(`✅ Movie ${id} fetched successfully`);
        return { ...movieResponse.data, reviews: reviewsResponse.data };

    } catch (error) {
        console.error(`❌ Error in getMovieById(${id}):`, error.response?.status, error.response?.data || error.message);
        throw new Error("Failed to fetch movie details");
    }
}

// ===============================================
// SPRINGBOOT ENTITIES
// ===============================================

async function getAllPosters() {
    try {
        console.log("🔍 Starting getAllPosters...");

        const response = await springBootAPI.get("/api/posters/all");
        console.log("✅ Posters fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllPosters:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch posters data");
    }
}

async function getAllStudios() {
    try {
        console.log("🔍 Starting getAllStudios...");

        const response = await springBootAPI.get("/api/studios/all");
        console.log("✅ Studios fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllStudios:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch studios data");
    }
}

// ===============================================
// SPRINGBOOT ENTITIES (no /all suffix needed)
// ===============================================

async function getAllActors() {
    try {
        console.log("🔍 Starting getAllActors...");
        console.log("🔧 Attempting to connect to:", springBootAPI.defaults.baseURL + "/api/actors");

        const response = await springBootAPI.get("/api/actors");
        console.log("✅ Actors fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllActors:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url,
            code: error.code,
            baseURL: springBootAPI.defaults.baseURL
        });
        throw new Error("Failed to fetch actors data");
    }
}

async function getAllCrew() {
    try {
        console.log("🔍 Starting getAllCrew...");

        const response = await springBootAPI.get("/api/crew");
        console.log("✅ Crew fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllCrew:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch crew data");
    }
}

async function getAllCountries() {
    try {
        console.log("🔍 Starting getAllCountries...");

        const response = await springBootAPI.get("/api/countries");
        console.log("✅ Countries fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllCountries:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch countries data");
    }
}

async function getAllGenres() {
    try {
        console.log("🔍 Starting getAllGenres...");

        const response = await springBootAPI.get("/api/genres");
        console.log("✅ Genres fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllGenres:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch genres data");
    }
}

async function getAllLanguages() {
    try {
        console.log("🔍 Starting getAllLanguages...");

        const response = await springBootAPI.get("/api/languages");
        console.log("✅ Languages fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllLanguages:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch languages data");
    }
}

async function getAllThemes() {
    try {
        console.log("🔍 Starting getAllThemes...");

        const response = await springBootAPI.get("/api/themes");
        console.log("✅ Themes fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllThemes:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch themes data");
    }
}

async function getAllOscarAwards() {
    try {
        console.log("🔍 Starting getAllOscarAwards...");

        const response = await springBootAPI.get("/api/the_oscar_awards");
        console.log("✅ Oscar Awards fetched:", response.status, `(${response.data?.length} items)`);

        return response.data;

    } catch (error) {
        console.error("❌ Error in getAllOscarAwards:", {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url
        });
        throw new Error("Failed to fetch Oscar Awards data");
    }
}

// ===============================================
// EXPORTS
// ===============================================

module.exports = {
    getAllMovies,
    getAllReviews,
    getAllReleases,
    getMovieById,
    getAllActors,
    getAllCrew,
    getAllCountries,
    getAllGenres,
    getAllLanguages,
    getAllPosters,
    getAllStudios,
    getAllThemes,
    getAllOscarAwards
};