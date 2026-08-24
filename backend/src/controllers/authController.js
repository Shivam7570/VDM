const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/apiResponse');
const ApiError = require('../utils/apiError');

// Helper to send JWT in response & HTTP cookie
const sendTokenResponse = (user, statusCode, res, message) => {
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    };

    res.status(statusCode)
        .cookie('token', token, options)
        .json(
            new ApiResponse(
                statusCode,
                {
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token,
                },
                message
            )
        );
};

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, 'Please provide name, email, and password');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new ApiError(400, 'User with this email already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
        role: role || 'user',
    });

    sendTokenResponse(user, 201, res, 'User registered successfully');
});

// @desc    Login User
// @route   POST /api/v1/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, 'Please provide email and password');
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        throw new ApiError(401, 'Invalid credentials');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        throw new ApiError(401, 'Invalid credentials');
    }

    sendTokenResponse(user, 200, res, 'Login successful');
});

// @desc    Get Current User Profile
// @route   GET /api/v1/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json(new ApiResponse(200, user, 'Current user profile fetched'));
});

// @desc    Logout User
// @route   POST /api/v1/auth/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json(new ApiResponse(200, {}, 'User logged out successfully'));
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logoutUser,
};
