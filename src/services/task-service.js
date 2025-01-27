import Task from "../models/task-model.js";
import mongoose from "mongoose";
class TaskService {
    async createTask(payload) {
        try {
            const task = await Task.create(payload);
            return task;
        } catch (error) {
            throw error;
        }
    }

    async getAllTasks(userId, query) {
        try {
            const pipeline = [
                { $match: { user: new mongoose.Types.ObjectId(userId)} },
                
                ...(query.search
                    ? [
                        {
                            $match: {
                                $or: [
                                    { title: { $regex: query.search, $options: 'i' } }, 
                                    { description: { $regex: query.search, $options: 'i' } },
                                ],
                            },
                        },
                    ]
                    : []),
                
                ...(query.completed !== undefined
                    ? [{ $match: { completed: query.completed === 'true'} }]
                    : []),
    
                ...(query.dueDate
                    ? [{ $sort: { dueDate: query.dueDate === 'asc' ? 1 : -1 } }]
                    : []),
            ];
            const tasks = await Task.aggregate(pipeline);
            return tasks;
        } catch (error) {
            throw error;
        }
    }
    

    async getTaskById(taskId) {
        try {
            const task = await Task.findById(taskId);
            return task;
        } catch (error) {
            throw error;
        }
    }

    async updateTask(taskId, payload) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(taskId, payload, { new: true });
            return updatedTask;
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(taskId) {
        try {
            const deletedTask = await Task.findByIdAndDelete(taskId);
            return deletedTask;
        } catch (error) {
            throw error;
        }
    }
}

export default TaskService;