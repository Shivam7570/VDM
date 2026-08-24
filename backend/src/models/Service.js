const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Service title is required'],
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        features: [
            {
                type: String,
            },
        ],
        icon: {
            type: String,
            default: 'default-icon',
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Service', serviceSchema);
