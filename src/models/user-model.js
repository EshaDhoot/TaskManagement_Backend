import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "../config/server-config.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    const SALT = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = encryptedPassword;
    next();
})

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email, name: this.name}, JWT_SECRET_KEY, {
        expiresIn: '1d'
    })
}

export default mongoose.model("User", userSchema);