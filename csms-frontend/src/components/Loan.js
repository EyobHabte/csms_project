// src/components/Loan.js
import React, { useState } from 'react';
import api from '../api/api';

function Loan() {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanStatus, setLoanStatus] = useState(null);

  const applyForLoan = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('loan/apply/', { amount: loanAmount });
      setLoanStatus(response.data.status);
    } catch (error) {
      console.error("Loan application error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Apply for a Loan</h2>
      <form onSubmit={applyForLoan}>
        <div className="mb-3">
          <label className="form-label">Loan Amount</label>
          <input
            type="number"
            className="form-control"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Apply</button>
      </form>

      {loanStatus && (
        <div className="mt-4">
          <p><strong>Loan Status:</strong> {loanStatus}</p>
        </div>
      )}
    </div>
  );
}

export default Loan;
