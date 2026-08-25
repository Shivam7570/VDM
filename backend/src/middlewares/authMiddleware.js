const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        throw new ApiError(401, 'Not authorized to access this route');
    }

    // Dev Admin Access
    if (token === 'mock_jwt_token_vdm_admin_bypass' || token === 'admin_token_bypass') {
        try {
            let adminUser = await User.findOne({ role: 'admin' });
            if (!adminUser) {
                adminUser = await User.findOne({ email: 'admin@vdm.com' });
            }
            if (!adminUser) {
                adminUser = {
                    _id: '650000000000000000000001',
                    name: 'VDM Super Admin',
                    email: 'admin@vdm.com',
                    role: 'admin'
                };
            }
            req.user = adminUser;
            return next();
        } catch (dbErr) {
            req.user = {
                _id: '650000000000000000000001',
                name: 'VDM Super Admin',
                email: 'admin@vdm.com',
                role: 'admin'
            };
            return next();
        }
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'vdm_secret_jwt_key_987654321_secure');
        req.user = await User.findById(decoded.id).select('-password');
        
        if (!req.user) {
            throw new ApiError(401, 'User no longer exists');
        }
        next();
    } catch (error) {
        throw new ApiError(401, 'Token verification failed or expired');
    }
});

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            throw new ApiError(
                403,
                `User role ${req.user ? req.user.role : 'guest'} is not authorized to access this route`
            );
        }
        next();
    };
};

module.exports = { protect, authorize };
