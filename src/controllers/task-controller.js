import TaskService from "../services/task-service.js";

const taskService = new TaskService();

export const createTask = async (req, res) => {    
    try {
        const task = await taskService.createTask({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate
        });
        res.status(201).json({
            data: task,
            message: "Task created successfully",            
            error: {},
            success: true
        });
    } catch (error) {
        console.error("Error creating task from taskController");
        res.status(500).json({
            data: {},
            message: "Error creating task",
            error: error.message,
            success: false
        });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks(req.user.id, req.query);
        res.status(200).json({
            data: tasks,
            message: "Tasks fetched successfully",
            error: {},
            success: true
        });
    } catch (error) {
        console.error("Error fetching tasks from taskController");
        res.status(500).json({
            data: {},
            message: "Error fetching tasks",
            error: error.message,
            success: false
        });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.taskId);
        res.status(200).json({
            data: task,
            message: "Task fetched successfully",
            error: {},
            success: true
        });
    } catch (error) {
        console.error("Error fetching task from taskController");
        res.status(500).json({
            data: {},
            message: "Error fetching task",
            error: error.message,
            success: false
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTask(req.params.taskId, req.body);
        res.status(200).json({
            data: task,
            message: "Task updated successfully",
            error: {},
            success: true
        });
    } catch (error) {
        console.error("Error updating task from taskController");
        res.status(500).json({
            data: {},
            message: "Error updating task",
            error: error.message,
            success: false
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await taskService.deleteTask(req.params.taskId);
        res.status(200).json({
            data: task,
            message: "Task deleted successfully",
            error: {},
            success: true
        });
    } catch (error) {    
        console.error("Error deleting task from taskController");
        res.status(500).json({
            data: {},
            message: "Error deleting task",
            error: error.message,
            success: false
        });
    }
};
