import mongoose from 'mongoose';
import { MONGODB_URL } from '../config/server-config.js';

export const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to TODO Database');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
};