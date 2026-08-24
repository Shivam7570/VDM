const express = require('express');
const router = express.Router();

const auditRoutes = require('./auditRoutes');
const contactRoutes = require('./contactRoutes');
const authRoutes = require('./authRoutes');
const serviceRoutes = require('./serviceRoutes');

// API Health Check
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'VDM API is running cleanly!',
        timestamp: new Date().toISOString(),
    });
});

// Mount Routes
router.use('/audits', auditRoutes);
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);
router.use('/services', serviceRoutes);

module.exports = router;
