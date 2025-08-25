class Movie {
    constructor({
                    id,
                    name,
                    date,
                    tagline,
                    description,
                    minute,
                    rating,
                    reviews = [],
                    releaseInfo = {}
                }) {
        // Static data from PostgreSQL (Spring Boot)
        this.id = id;
        this.name = name;
        this.date = date;
        this.tagline = tagline;
        this.description = description;
        this.minute = minute;
        this.rating = rating;

        // Dynamic data from MongoDB (Express)
        this.reviews = reviews;       // e.g., [{user: "John", comment: "Great!", score: 5}]
        this.releaseInfo = releaseInfo; // e.g., {country: "USA", released: "2023-07-20"}
    }
}

module.exports = Movie;
