// src/components/Savings.js
import React, { useState } from 'react';
import api from '../api/api';

function Savings() {
  const [amount, setAmount] = useState('');
  const [actionType, setActionType] = useState('deposit');

  const handleTransaction = async (e) => {
    e.preventDefault();
    try {
      const endpoint = actionType === 'deposit' ? 'savings/deposit/' : 'savings/withdraw/';
      await api.post(endpoint, { amount });
      alert(`Successfully ${actionType}ed $${amount}`);
      setAmount('');
    } catch (error) {
      console.error(`${actionType} error:`, error);
    }
  };

  return (
    <div className="container">
      <h2>Savings Management</h2>
      <form onSubmit={handleTransaction}>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Action</label>
          <select
            className="form-control"
            value={actionType}
            onChange={(e) => setActionType(e.target.value)}
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {actionType.charAt(0).toUpperCase() + actionType.slice(1)}
        </button>
      </form>
    </div>
  );
}

export default Savings;
