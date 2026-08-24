const express = require('express');
const router = express.Router();
const {
    createAuditRequest,
    getAllAuditRequests,
    getAuditRequestById,
    updateAuditStatus,
    deleteAuditRequest,
} = require('../controllers/auditController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.post('/', createAuditRequest);
router.get('/', protect, authorize('admin'), getAllAuditRequests);
router.get('/:id', protect, authorize('admin'), getAuditRequestById);
router.patch('/:id/status', protect, authorize('admin'), updateAuditStatus);
router.delete('/:id', protect, authorize('admin'), deleteAuditRequest);

module.exports = router;
