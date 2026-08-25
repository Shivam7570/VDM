const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to Database and start server
const startServer = async () => {
    await connectDB();
    
    const server = app.listen(PORT, () => {
        console.log(`=================================`);
        console.log(`[VDM Backend Server running on PORT ${PORT}]`);
        console.log(`[Environment]: ${process.env.NODE_ENV || 'development'}`);
        console.log(`=================================`);
    });

    // Handle Unhandled Rejections
    process.on('unhandledRejection', (err) => {
        console.error(`[Unhandled Rejection Error]: ${err.message}`);
        server.close(() => process.exit(1));
    });
};

startServer();
