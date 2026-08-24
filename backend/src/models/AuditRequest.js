const mongoose = require('mongoose');

const auditRequestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email',
            ],
        },
        phone: {
            type: String,
            trim: true,
        },
        website: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: ['pending', 'in-review', 'completed'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('AuditRequest', auditRequestSchema);
