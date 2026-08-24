const Contact = require('../models/Contact');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/apiResponse');
const ApiError = require('../utils/apiError');

// @desc    Submit Contact Message
// @route   POST /api/v1/contacts
// @access  Public
const submitContactMessage = asyncHandler(async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        throw new ApiError(400, 'Name, Email, and Message are required');
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        subject,
        message,
    });

    res.status(201).json(new ApiResponse(201, contact, 'Contact message submitted successfully'));
});

// @desc    Get all Contact Messages
// @route   GET /api/v1/contacts
// @access  Private/Admin
const getAllContactMessages = asyncHandler(async (req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(new ApiResponse(200, contacts, 'Fetched all contact messages'));
});

// @desc    Mark Contact Message as Read
// @route   PATCH /api/v1/contacts/:id/read
// @access  Private/Admin
const markMessageAsRead = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { isRead: true },
        { new: true }
    );

    if (!contact) {
        throw new ApiError(404, 'Contact message not found');
    }

    res.status(200).json(new ApiResponse(200, contact, 'Message marked as read'));
});

// @desc    Delete Contact Message
// @route   DELETE /api/v1/contacts/:id
// @access  Private/Admin
const deleteContactMessage = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        throw new ApiError(404, 'Contact message not found');
    }
    res.status(200).json(new ApiResponse(200, null, 'Contact message deleted successfully'));
});

module.exports = {
    submitContactMessage,
    getAllContactMessages,
    markMessageAsRead,
    deleteContactMessage,
};
