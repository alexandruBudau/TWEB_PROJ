const request = require('supertest');
const app = require('../server'); // your Express app
const movieService = require('../services/movieService');
const movieController = require('../controllers/movieController');

jest.mock('../services/movieService');

describe('Movie Service & Controller', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Generic template to generate tests for each entity
    const entities = [
        { name: 'Movies', route: '/api/movies', controllerMethod: 'getAllMovies', serviceMethod: 'getAllMovies' },
        { name: 'Actors', route: '/api/actors', controllerMethod: 'getAllActors', serviceMethod: 'getAllActors' },
        { name: 'Crew', route: '/api/crew', controllerMethod: 'getAllCrew', serviceMethod: 'getAllCrew' },
        { name: 'Countries', route: '/api/countries', controllerMethod: 'getAllCountries', serviceMethod: 'getAllCountries' },
        { name: 'Genres', route: '/api/genres', controllerMethod: 'getAllGenres', serviceMethod: 'getAllGenres' },
        { name: 'Languages', route: '/api/languages', controllerMethod: 'getAllLanguages', serviceMethod: 'getAllLanguages' },
        { name: 'Posters', route: '/api/posters', controllerMethod: 'getAllPosters', serviceMethod: 'getAllPosters' },
        { name: 'Studios', route: '/api/studios', controllerMethod: 'getAllStudios', serviceMethod: 'getAllStudios' },
        { name: 'Themes', route: '/api/themes', controllerMethod: 'getAllThemes', serviceMethod: 'getAllThemes' },
        { name: 'OscarAwards', route: '/api/the_oscar_awards', controllerMethod: 'getAllOscarAwards', serviceMethod: 'getAllOscarAwards' },
        { name: 'Reviews', route: '/api/rotten_tomatoes_reviews', controllerMethod: 'getAllReviews', serviceMethod: 'getAllReviews' },
        { name: 'Releases', route: '/api/releases', controllerMethod: 'getAllReleases', serviceMethod: 'getAllReleases' },
    ];

    entities.forEach(({ name, route, controllerMethod, serviceMethod }) => {
        describe(`${name} Service`, () => {
            it(`should resolve with an array of ${name.toLowerCase()}`, async () => {
                const mockData = [{ name: `${name} 1` }, { name: `${name} 2` }];
                movieService[serviceMethod].mockResolvedValue(mockData);

                const data = await movieService[serviceMethod]();
                expect(data).toEqual(mockData);
                expect(Array.isArray(data)).toBe(true);
            });

            it('should throw an error if service fails', async () => {
                movieService[serviceMethod].mockRejectedValue(new Error('Failed to fetch'));

                await expect(movieService[serviceMethod]()).rejects.toThrow('Failed to fetch');
            });
        });

        describe(`movieController.${controllerMethod}`, () => {
            it(`responds with status 200 and ${name.toLowerCase()} data`, async () => {
                const mockData = [{ name: `${name} 1` }];
                movieService[serviceMethod].mockResolvedValue(mockData);

                const req = {};
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn(),
                };
                const next = jest.fn();

                await movieController[controllerMethod](req, res, next);

                expect(res.status).toHaveBeenCalledWith(200);
                expect(res.json).toHaveBeenCalledWith({ data: mockData });
                expect(next).not.toHaveBeenCalled();
            });

            it('should call next with error on failure', async () => {
                movieService[serviceMethod].mockRejectedValue(new Error('fail'));

                const req = {};
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn(),
                };
                const next = jest.fn();

                await movieController[controllerMethod](req, res, next);

                expect(next).toHaveBeenCalledWith(expect.any(Error));
            });

            it('should handle errors and respond with status 500', async () => {
                movieService[serviceMethod].mockRejectedValue(new Error('Service failed'));

                const req = {};
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn(),
                };
                const next = jest.fn();

                await movieController[controllerMethod](req, res, next);

                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Server error' });
            });
        });

        describe(`GET ${route} route`, () => {
            it(`should respond with 200 and ${name.toLowerCase()} array`, async () => {
                const mockData = [{ name: `${name} A` }, { name: `${name} B` }];
                movieService[serviceMethod].mockResolvedValue(mockData);

                const response = await request(app).get(route);

                expect(response.status).toBe(200);
                expect(response.body).toEqual({ data: mockData });
                expect(Array.isArray(response.body.data)).toBe(true);
            });

            it('should respond with 500 if service throws', async () => {
                movieService[serviceMethod].mockRejectedValue(new Error('Service failure'));

                const response = await request(app).get(route);

                expect(response.status).toBe(500);
                expect(response.body).toEqual({ error: 'Server error' });
            });
        });
    });

    // Additional test for getMovieById (because it takes params and returns one object)

    describe('movieController.getMovieById', () => {
        it('responds with status 200 and movie data', async () => {
            const mockMovie = { id: '123', title: 'Test Movie' };
            movieService.getMovieById.mockResolvedValue(mockMovie);

            const req = { params: { id: '123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            const next = jest.fn();

            await movieController.getMovieById(req, res, next);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ data: mockMovie });
            expect(next).not.toHaveBeenCalled();
        });

        it('should call next with error and respond 500 on failure', async () => {
            movieService.getMovieById.mockRejectedValue(new Error('fail'));

            const req = { params: { id: '123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            const next = jest.fn();

            await movieController.getMovieById(req, res, next);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Server error' });
            expect(next).toHaveBeenCalledWith(expect.any(Error));
        });
    });

});
