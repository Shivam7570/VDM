const express = require('express');
const router = express.Router();
const {
    getServices,
    createService,
    getServiceBySlug,
    updateService,
    deleteService,
} = require('../controllers/serviceController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get('/', getServices);
router.post('/', protect, authorize('admin'), createService);
router.get('/:slug', getServiceBySlug);
router.put('/:id', protect, authorize('admin'), updateService);
router.delete('/:id', protect, authorize('admin'), deleteService);

module.exports = router;
