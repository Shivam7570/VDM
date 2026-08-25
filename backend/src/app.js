const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

// Enable CORS for all client devices, mobile phones, local IPs, and hosted subdomains
app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    })
);

// Body parser middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

const path = require('path');
const fs = require('fs');

// API v1 Routes
app.use('/api/v1', routes);

// Serve static frontend build if available
const clientDistPath = path.join(__dirname, '../../client/dist');
if (fs.existsSync(clientDistPath)) {
    app.use(express.static(clientDistPath));

    // SPA fallback middleware for React Router
    app.use((req, res, next) => {
        if (req.method === 'GET' && !req.originalUrl.startsWith('/api')) {
            return res.sendFile(path.join(clientDistPath, 'index.html'));
        }
        next();
    });
} else {
    // Base Route for API only mode
    app.get('/', (req, res) => {
        res.json({
            message: 'Welcome to VDM Backend API',
            documentation: '/api/v1/health',
        });
    });
}

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
