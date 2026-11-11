import Payment from '../models/paymentModel.js';

export const getAllPayments = async (userId, filter = {}) => {
  return await Payment.find({ userId, ...filter })
    .populate('clientId', 'name email company')
    .populate('projectId', 'title')
    .sort({ dueDate: -1 });
};

export const getPaymentById = async (paymentId, userId) => {
  const payment = await Payment.findOne({ _id: paymentId, userId })
    .populate('clientId', 'name email company')
    .populate('projectId', 'title');

  if (!payment) {
    throw new Error('Payment record not found');
  }
  return payment;
};

export const createPayment = async (paymentData, userId) => {
  return await Payment.create({
    ...paymentData,
    userId,
  });
};

export const updatePayment = async (paymentId, updateData, userId) => {
  const payment = await Payment.findOneAndUpdate(
    { _id: paymentId, userId },
    updateData,
    { new: true, runValidators: true }
  );

  if (!payment) {
    throw new Error('Payment record not found');
  }
  return payment;
};

export const deletePayment = async (paymentId, userId) => {
  const payment = await Payment.findOneAndDelete({ _id: paymentId, userId });
  if (!payment) {
    throw new Error('Payment record not found');
  }
  return payment;
};

export const getPaymentSummary = async (userId) => {
  const payments = await Payment.find({ userId });

  const totalRevenue = payments
    .filter((p) => p.status === 'paid')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const pendingAmount = payments
    .filter((p) => p.status === 'pending')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const overdueAmount = payments
    .filter((p) => p.status === 'overdue')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return {
    totalRevenue,
    pendingAmount,
    overdueAmount,
    totalInvoices: payments.length,
  };
};

