const express = require('express');
const router = express.Router();
const {
    submitContactMessage,
    getAllContactMessages,
    markMessageAsRead,
    deleteContactMessage,
} = require('../controllers/contactController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.post('/', submitContactMessage);
router.get('/', protect, authorize('admin'), getAllContactMessages);
router.patch('/:id/read', protect, authorize('admin'), markMessageAsRead);
router.delete('/:id', protect, authorize('admin'), deleteContactMessage);

module.exports = router;
