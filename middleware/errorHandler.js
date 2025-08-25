// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error('Error Stack:', err.stack);

    // Default error
    let error = {
        status: err.status || 500,
        message: err.message || 'Internal Server Error'
    };

    // Axios errors (from API calls to Spring Boot/Express-Mongo)
    if (err.response) {
        error.status = err.response.status;
        error.message = err.response.data?.message || err.response.statusText;
        error.details = `Failed to fetch from external API: ${err.config?.baseURL}${err.config?.url}`;
    }
    // Network errors
    else if (err.request) {
        error.status = 503;
        error.message = 'Service temporarily unavailable';
        error.details = 'Unable to connect to external services';
    }
    // Validation errors
    else if (err.name === 'ValidationError') {
        error.status = 400;
        error.message = 'Invalid request data';
        error.details = err.message;
    }

    // Don't leak error details in production
    const response = {
        error: {
            status: error.status,
            message: error.message
        }
    };

    // Include details in development
    if (process.env.NODE_ENV === 'development') {
        response.error.details = error.details;
        response.error.stack = err.stack;
    }

    res.status(error.status).json(response);
};

module.exports = errorHandler;