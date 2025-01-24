import express from 'express';
const router = express.Router();

import { createUser, signIn } from '../../controllers/user-controller.js';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../../controllers/task-controller.js';
import { validateRegisterUserAuth, validateLoginUserAuth } from '../../middlewares/auth-request-validators.js';
import { validateAuthToken } from '../../middlewares/auth-token-validator.js';

router.post('/auth/register', validateRegisterUserAuth, createUser);
router.post('/auth/login', validateLoginUserAuth, signIn);

router.post('/add-task',validateAuthToken, createTask);
router.get('/tasks', validateAuthToken, getAllTasks);
router.get('/task/:taskId', validateAuthToken, getTaskById);
router.patch('/task/:taskId', validateAuthToken, updateTask);
router.delete('/task/:taskId', validateAuthToken, deleteTask);

export default router;