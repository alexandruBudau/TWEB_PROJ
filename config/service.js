const axios = require("axios");
const { springBoot, expressMongo } = require("./database");

console.log("🔧 SpringBoot baseURL:", springBoot.baseURL);
console.log("🔧 ExpressMongo baseURL:", expressMongo.baseURL);

// Create two axios instances for different servers
const springBootAPI = axios.create({
    baseURL: springBoot.baseURL,
    timeout: 60000, // Increased from 15s to 60s
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const expressMongoAPI = axios.create({
    baseURL: expressMongo.baseURL,
    timeout: 30000, // Increased from 15s to 30s
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add request interceptor for debugging
springBootAPI.interceptors.request.use(request => {
    console.log('🚀 Starting SpringBoot Request:', request.method?.toUpperCase(), request.url);
    return request;
});

springBootAPI.interceptors.response.use(
    response => {
        console.log('✅ SpringBoot Response:', response.status, response.config.url);
        return response;
    },
    error => {
        console.log('❌ SpringBoot Error:', error.message, error.config?.url);
        return Promise.reject(error);
    }
);

module.exports = {
    springBootAPI,
    expressMongoAPI
};