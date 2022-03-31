import express from 'express';
import * as tasks from '../models/tasks.js';

const router = express.Router();
//Get tasks

router.get('/', tasks.getTasks);

//Get single task
router.get('/:id', tasks.getTaskByID);

//Create a task
router.post('/', tasks.createTask);

//Update task by ID
router.put('/:id', tasks.updateTaskByID);

//Delete task by ID
router.delete('/:id', tasks.deleteTaskByID);

export default router;
