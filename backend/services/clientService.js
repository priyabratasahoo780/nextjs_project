import Client from '../models/clientModel.js';

export const getAllClients = async (userId) => {
  return await Client.find({ userId }).sort({ createdAt: -1 });
};

export const getClientById = async (clientId, userId) => {
  const client = await Client.findOne({ _id: clientId, userId });
  if (!client) {
    throw new Error('Client not found');
  }
  return client;
};

export const createClient = async (clientData, userId) => {
  return await Client.create({
    ...clientData,
    userId,
  });
};

export const updateClient = async (clientId, updateData, userId) => {
  const client = await Client.findOneAndUpdate(
    { _id: clientId, userId },
    updateData,
    { new: true, runValidators: true }
  );

  if (!client) {
    throw new Error('Client not found');
  }
  return client;
};

export const deleteClient = async (clientId, userId) => {
  const client = await Client.findOneAndDelete({ _id: clientId, userId });
  if (!client) {
    throw new Error('Client not found');
  }
  return client;
};

