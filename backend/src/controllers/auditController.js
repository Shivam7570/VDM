const AuditRequest = require('../models/AuditRequest');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/apiResponse');
const ApiError = require('../utils/apiError');

// @desc    Submit new Audit Request
// @route   POST /api/v1/audits
// @access  Public
const createAuditRequest = asyncHandler(async (req, res) => {
    const { name, email, phone, website, message } = req.body;

    if (!name || !email) {
        throw new ApiError(400, 'Name and Email are required fields');
    }

    const audit = await AuditRequest.create({
        name,
        email,
        phone,
        website,
        message,
    });

    res.status(201).json(new ApiResponse(201, audit, 'Audit request submitted successfully'));
});

// @desc    Get all Audit Requests (Admin)
// @route   GET /api/v1/audits
// @access  Private/Admin
const getAllAuditRequests = asyncHandler(async (req, res) => {
    const audits = await AuditRequest.find().sort({ createdAt: -1 });
    res.status(200).json(new ApiResponse(200, audits, 'Fetched all audit requests'));
});

// @desc    Get single Audit Request
// @route   GET /api/v1/audits/:id
// @access  Private/Admin
const getAuditRequestById = asyncHandler(async (req, res) => {
    const audit = await AuditRequest.findById(req.params.id);
    if (!audit) {
        throw new ApiError(404, 'Audit request not found');
    }
    res.status(200).json(new ApiResponse(200, audit, 'Fetched audit request'));
});

// @desc    Update Audit Request Status
// @route   PATCH /api/v1/audits/:id/status
// @access  Private/Admin
const updateAuditStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    if (!['pending', 'in-review', 'completed'].includes(status)) {
        throw new ApiError(400, 'Invalid status value');
    }

    const audit = await AuditRequest.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true, runValidators: true }
    );

    if (!audit) {
        throw new ApiError(404, 'Audit request not found');
    }

    res.status(200).json(new ApiResponse(200, audit, 'Audit status updated successfully'));
});

// @desc    Delete Audit Request
// @route   DELETE /api/v1/audits/:id
// @access  Private/Admin
const deleteAuditRequest = asyncHandler(async (req, res) => {
    const audit = await AuditRequest.findByIdAndDelete(req.params.id);
    if (!audit) {
        throw new ApiError(404, 'Audit request not found');
    }
    res.status(200).json(new ApiResponse(200, null, 'Audit request deleted successfully'));
});

module.exports = {
    createAuditRequest,
    getAllAuditRequests,
    getAuditRequestById,
    updateAuditStatus,
    deleteAuditRequest,
};
