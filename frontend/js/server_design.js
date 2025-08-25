const API_BASE = "http://localhost:3000/api/"; // Express server

document.addEventListener("DOMContentLoaded", () => {
    loadTrendingMovies();
    loadTopRatedMovies();
    loadCarousel();
    setupModalHandlers();
});

// Fetch movies from endpoint and ensure array
async function fetchMovies(endpoint) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`);
        if (!response.ok) throw new Error("Network error");
        const json = await response.json();

        // Handle both array and object responses
        if (Array.isArray(json)) return json;
        if (json.data && Array.isArray(json.data)) return json.data;
        return [];
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        return [];
    }
}

// Movie Card Component
function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
        <img src="${movie.posterUrl || 'images/default.jpg'}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.director || 'Unknown'} (${movie.year || 'N/A'})</p>
            <div class="movie-rating">⭐ ${movie.avgRating?.toFixed(1) ?? "N/A"}</div>
        </div>
    `;
    card.addEventListener("click", () => openRatingModal(movie));
    return card;
}

// Display list of movies
function displayMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    if (!Array.isArray(movies) || movies.length === 0) {
        container.innerHTML = "<p>No movies available.</p>";
        return;
    }
    movies.forEach(movie => container.appendChild(createMovieCard(movie)));
}

// Trending movies
async function loadTrendingMovies() {
    const movies = await fetchMovies("releases");
    displayMovies(movies, "trending-movies");
}

// Top Rated movies
async function loadTopRatedMovies() {
    const movies = await fetchMovies("releases");
    displayMovies(movies, "top-rated");
}

// Carousel setup
async function loadCarousel() {
    const movies = await fetchMovies("releases");
    const carousel = document.getElementById("movie-carousel");
    const pagination = document.getElementById("carousel-pagination");
    carousel.innerHTML = "";
    pagination.innerHTML = "";

    if (!movies || movies.length === 0) return;

    movies.forEach((movie, index) => {
        const slide = document.createElement("div");
        slide.className = "carousel-slide";
        slide.innerHTML = `
            <img src="${movie.posterUrl || 'images/default.jpg'}" alt="${movie.title}" class="carousel-image">
            <p>${movie.title}</p>
        `;
        slide.addEventListener("click", () => openRatingModal(movie));
        carousel.appendChild(slide);

        const dot = document.createElement("span");
        dot.className = "carousel-dot";
        dot.addEventListener("click", () => moveToSlide(index));
        pagination.appendChild(dot);
    });

    initCarousel();
}

// Carousel logic
function initCarousel() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dot");

    if (!slides.length) return;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${(idx - i) * 100}%)`;
        });
        dots.forEach(dot => dot.classList.remove("active"));
        dots[i].classList.add("active");
        index = i;
    }

    showSlide(0);
    document.querySelector(".prev-button")?.addEventListener("click", () => {
        showSlide((index - 1 + slides.length) % slides.length);
    });
    document.querySelector(".next-button")?.addEventListener("click", () => {
        showSlide((index + 1) % slides.length);
    });

    window.moveToSlide = showSlide;
}

// Modal logic
function setupModalHandlers() {
    const modal = document.getElementById("ratingModal");
    const stars = modal.querySelectorAll(".rating-stars i");
    const closeModal = modal.querySelector(".close-modal");
    const submitBtn = modal.querySelector(".submit-rating");

    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener("click", () => {
                modal.dataset.selectedRating = parseInt(star.dataset.rating);
                updateStars(parseInt(star.dataset.rating));
            });
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
            resetForm();
        });
    }

    submitBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const movieId = modal.dataset.movieId;
        const rating = parseInt(modal.dataset.selectedRating || 0);
        const title = document.getElementById("review-title").value.trim();
        const text = document.getElementById("review-text").value.trim();

        if (!movieId || rating === 0) {
            alert("Select a movie and a rating!");
            return;
        }

        try {
            await fetch(`${API_BASE}rotten_tomatoes_reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ movieId, title, text, rating })
            });
            alert("Review submitted!");
            modal.style.display = "none";
            resetForm();
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    });
}

// Show modal
function openRatingModal(movie) {
    const modal = document.getElementById("ratingModal");
    modal.style.display = "block";
    modal.dataset.movieId = movie._id || movie.id;
    modal.dataset.selectedRating = 0;
    updateStars(0);
    resetForm();
}

// Update stars
function updateStars(rating) {
    const stars = document.querySelectorAll(".rating-stars i");
    stars.forEach((star, i) => {
        star.className = i < rating ? "fas fa-star" : "far fa-star";
    });
}

// Reset modal
function resetForm() {
    updateStars(0);
    document.getElementById("review-title").value = "";
    document.getElementById("review-text").value = "";
}