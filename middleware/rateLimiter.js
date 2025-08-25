// middleware/rateLimiter.js

const rateLimiter = (() => {
    // In-memory storage for request tracking
    const clients = new Map();

    // Configuration
    const WINDOW_SIZE = 15 * 60 * 1000; // 15 minutes
    const MAX_REQUESTS = 100; // requests per window

    // Clean up old entries every 5 minutes
    setInterval(() => {
        const now = Date.now();
        for (const [ip, data] of clients.entries()) {
            if (now - data.windowStart > WINDOW_SIZE) {
                clients.delete(ip);
            }
        }
    }, 5 * 60 * 1000);

    return (req, res, next) => {
        const clientIP = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
        const now = Date.now();

        // Get or create client data
        let clientData = clients.get(clientIP);

        if (!clientData || now - clientData.windowStart > WINDOW_SIZE) {
            // New window
            clientData = {
                windowStart: now,
                requestCount: 1
            };
        } else {
            // Within existing window
            clientData.requestCount++;
        }

        clients.set(clientIP, clientData);

        // Check if limit exceeded
        if (clientData.requestCount > MAX_REQUESTS) {
            return res.status(429).json({
                error: {
                    status: 429,
                    message: 'Too many requests',
                    details: `Rate limit exceeded. Maximum ${MAX_REQUESTS} requests per ${WINDOW_SIZE / 60000} minutes.`,
                    retryAfter: Math.ceil((clientData.windowStart + WINDOW_SIZE - now) / 1000)
                }
            });
        }

        // Add rate limit headers
        res.set({
            'X-RateLimit-Limit': MAX_REQUESTS,
            'X-RateLimit-Remaining': Math.max(0, MAX_REQUESTS - clientData.requestCount),
            'X-RateLimit-Reset': new Date(clientData.windowStart + WINDOW_SIZE).toISOString()
        });

        next();
    };
})();

module.exports = rateLimiter;