const Service = require('../models/Service');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/apiResponse');
const ApiError = require('../utils/apiError');

// @desc    Get all active Services
// @route   GET /api/v1/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
    const filter = req.query.all === 'true' ? {} : { isActive: true };
    const services = await Service.find(filter).sort({ createdAt: -1 });
    res.status(200).json(new ApiResponse(200, services, 'Services fetched successfully'));
});

// @desc    Create new Service (Admin)
// @route   POST /api/v1/services
// @access  Private/Admin
const createService = asyncHandler(async (req, res) => {
    const { title, slug, description, features, icon } = req.body;

    if (!title || !description) {
        throw new ApiError(400, 'Title and Description are required');
    }

    const generatedSlug = slug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const existingService = await Service.findOne({ slug: generatedSlug });
    if (existingService) {
        throw new ApiError(400, 'Service with this title/slug already exists');
    }

    const service = await Service.create({
        title,
        slug: generatedSlug,
        description,
        features,
        icon,
    });

    res.status(201).json(new ApiResponse(201, service, 'Service created successfully'));
});

// @desc    Get single Service by Slug
// @route   GET /api/v1/services/:slug
// @access  Public
const getServiceBySlug = asyncHandler(async (req, res) => {
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) {
        throw new ApiError(404, 'Service not found');
    }
    res.status(200).json(new ApiResponse(200, service, 'Service details fetched'));
});

// @desc    Update Service (Admin)
// @route   PUT /api/v1/services/:id
// @access  Private/Admin
const updateService = asyncHandler(async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!service) {
        throw new ApiError(404, 'Service not found');
    }

    res.status(200).json(new ApiResponse(200, service, 'Service updated successfully'));
});

// @desc    Delete Service (Admin)
// @route   DELETE /api/v1/services/:id
// @access  Private/Admin
const deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
        throw new ApiError(404, 'Service not found');
    }
    res.status(200).json(new ApiResponse(200, null, 'Service deleted successfully'));
});

module.exports = {
    getServices,
    createService,
    getServiceBySlug,
    updateService,
    deleteService,
};
