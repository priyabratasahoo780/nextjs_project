import Project from '../models/projectModel.js';
import Task from '../models/taskModel.js';

export const getAllProjects = async (userId, filter = {}) => {
  const query = { userId, ...filter };
  return await Project.find(query)
    .populate('clientId', 'name email company')
    .sort({ createdAt: -1 });
};

export const getProjectById = async (projectId, userId) => {
  const project = await Project.findOne({ _id: projectId, userId }).populate(
    'clientId',
    'name email company phone'
  );

  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};

export const createProject = async (projectData, userId) => {
  return await Project.create({
    ...projectData,
    userId,
  });
};

export const updateProject = async (projectId, updateData, userId) => {
  const project = await Project.findOneAndUpdate(
    { _id: projectId, userId },
    updateData,
    { new: true, runValidators: true }
  );

  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};

export const deleteProject = async (projectId, userId) => {
  const project = await Project.findOneAndDelete({ _id: projectId, userId });
  if (!project) {
    throw new Error('Project not found');
  }
  await Task.deleteMany({ projectId, userId });
  return project;
};

export const updateProjectProgress = async (projectId, userId) => {
  const totalTasks = await Task.countDocuments({ projectId, userId });
  if (totalTasks === 0) return;

  const completedTasks = await Task.countDocuments({
    projectId,
    userId,
    status: 'done',
  });

  const progress = Math.round((completedTasks / totalTasks) * 100);
  await Project.findOneAndUpdate({ _id: projectId, userId }, { progress });
};

