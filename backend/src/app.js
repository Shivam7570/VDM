const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

// Enable CORS
const allowedOrigins = [
    process.env.CLIENT_URL || 'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173'
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(null, true); // Permissive in dev mode
            }
        },
        credentials: true,
    })
);

// Body parser middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

// Base Route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to VDM Backend API',
        documentation: '/api/v1/health',
    });
});

// API v1 Routes
app.use('/api/v1', routes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
