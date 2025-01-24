import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);