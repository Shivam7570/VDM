const express = require('express');
const router = express.Router();

const auditRoutes = require('./auditRoutes');
const contactRoutes = require('./contactRoutes');
const authRoutes = require('./authRoutes');
const serviceRoutes = require('./serviceRoutes');

const mongoose = require('mongoose');

// API Health Check
router.get('/health', (req, res) => {
    const dbState = mongoose.connection.readyState;
    const dbStatus = dbState === 1 ? 'connected' : dbState === 2 ? 'connecting' : 'disconnected';
    res.status(dbState === 1 ? 200 : 503).json({
        success: dbState === 1,
        message: dbState === 1 ? 'VDM API & MongoDB Atlas connected successfully!' : 'VDM API is running, but MongoDB connection is failing.',
        database: dbStatus,
        timestamp: new Date().toISOString(),
    });
});

// Mount Routes
router.use('/audits', auditRoutes);
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);
router.use('/services', serviceRoutes);

module.exports = router;
