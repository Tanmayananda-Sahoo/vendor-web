import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://boyvector06:nIefnPXxZpbVSQH1@cluster0.tveyzp4.mongodb.net/');
        console.log('MongoDB connected successfully with connection Instance as: ',connectionInstance.connection.host);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

export {connectDB};