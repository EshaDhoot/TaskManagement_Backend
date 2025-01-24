import express from 'express';
const router = express.Router();

import { createUser, signIn } from '../../controllers/user-controller.js';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../../controllers/task-controller.js';
import { validateUserAuth } from '../../middlewares/auth-request-validators.js';
import { validateAuthToken } from '../../middlewares/auth-token-validator.js';

router.post('/auth/register', validateUserAuth, createUser);
router.post('/auth/login', validateUserAuth, signIn);

router.post('/add-task',validateAuthToken, createTask);
router.get('/tasks', validateAuthToken, getAllTasks);
router.get('/task/:taskId', validateAuthToken, getTaskById);
router.patch('/task/:taskId', validateAuthToken, updateTask);
router.delete('/task/:taskId', validateAuthToken, deleteTask);

export default router;