// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/users/',  // Replace with your backend URL
});

export const registerUser = (data) => api.post('register/', data);
export const loginUser = (data) => api.post('login/', data);
export const getAccountDetails = () => api.get('account/details/');
export const getAccountTransactions = () => api.get('account/transactions/');
export const applyForLoan = (data) => api.post('loan/apply/', data);
export const depositToSavings = (data) => api.post('savings/deposit/', data);
export const withdrawFromSavings = (data) => api.post('savings/withdraw/', data);

export default api;
