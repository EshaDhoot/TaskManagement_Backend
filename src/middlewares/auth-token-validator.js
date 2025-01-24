import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/server-config.js';
export const validateAuthToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(401).json({
                data: {},
                message: 'Unauthorized',
                error: 'No token provided',
                success: false
            });
        }
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({
            data: {},
            message: 'Invalid token',
            error: error.message,
            success: false
        });
    }
};