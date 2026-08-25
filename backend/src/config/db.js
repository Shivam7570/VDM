const mongoose = require('mongoose');
const dns = require('dns');

// Fix for Windows DNS resolution for MongoDB Atlas SRV records
try {
    if (dns.setDefaultResultOrder) {
        dns.setDefaultResultOrder('ipv4first');
    }
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (err) {
    // Ignore error if custom DNS assignment fails
}

const connectDB = async () => {
    const primaryUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/vdigimarks';
    const fallbackUri = 'mongodb://127.0.0.1:27017/vdigimarks';

    try {
        const conn = await mongoose.connect(primaryUri);
        console.log(`[MongoDB Connected Successfully]: ${conn.connection.host}`);

        // Seed default admin user if none exists in MongoDB
        try {
            const User = require('../models/User');
            const adminExists = await User.findOne({ role: 'admin' });
            if (!adminExists) {
                await User.create({
                    name: 'VDM Super Admin',
                    email: 'admin@vdm.com',
                    password: 'admin123',
                    role: 'admin'
                });
                console.log(`[MongoDB Seed]: Created default admin user (admin@vdm.com)`);
            }
        } catch (seedErr) {
            console.warn(`[MongoDB Seed Warning]: Could not seed default admin user: ${seedErr.message}`);
        }
    } catch (error) {
        console.error(`[Primary MongoDB Connection Failed]: ${error.message}`);

        // If primary URI was Atlas and failed, try local MongoDB as fallback
        if (primaryUri !== fallbackUri) {
            try {
                console.log(`[MongoDB]: Attempting fallback connection to local MongoDB (${fallbackUri})...`);
                const fallbackConn = await mongoose.connect(fallbackUri);
                console.log(`[MongoDB Connected (Local Fallback)]: ${fallbackConn.connection.host}`);
                return;
            } catch (fallbackErr) {
                console.error(`[Fallback Local MongoDB Failed]: ${fallbackErr.message}`);
            }
        }

        console.warn(`⚠️ [MongoDB Warning]: Server is running, but database connection is unavailable. Please check your internet connection or MongoDB Atlas IP whitelist (0.0.0.0/0).`);
    }
};

module.exports = connectDB;
