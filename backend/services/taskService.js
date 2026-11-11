import Task from '../models/taskModel.js';
import { updateProjectProgress } from './projectService.js';

export const getTasksByProject = async (projectId, userId) => {
  return await Task.find({ projectId, userId }).sort({ createdAt: -1 });
};

export const getAllTasks = async (userId, filter = {}) => {
  return await Task.find({ userId, ...filter })
    .populate('projectId', 'title status')
    .sort({ dueDate: 1 });
};

export const createTask = async (taskData, userId) => {
  const task = await Task.create({
    ...taskData,
    userId,
  });

  await updateProjectProgress(task.projectId, userId);

  return task;
};

export const updateTask = async (taskId, updateData, userId) => {
  const task = await Task.findOneAndUpdate(
    { _id: taskId, userId },
    updateData,
    { new: true, runValidators: true }
  );

  if (!task) {
    throw new Error('Task not found');
  }

  await updateProjectProgress(task.projectId, userId);

  return task;
};

export const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, userId });
  if (!task) {
    throw new Error('Task not found');
  }

  await updateProjectProgress(task.projectId, userId);

  return task;
};

