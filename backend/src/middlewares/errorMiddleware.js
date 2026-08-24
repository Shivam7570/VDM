const ApiError = require('../utils/apiError');

const notFound = (req, res, next) => {
    const error = new ApiError(404, `Route Not Found - ${req.originalUrl}`);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let errors = err.errors || [];

    // Mongoose bad ObjectId error
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found';
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        statusCode = 400;
        message = 'Duplicate field value entered';
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors).map(val => val.message).join(', ');
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};

module.exports = { notFound, errorHandler };
