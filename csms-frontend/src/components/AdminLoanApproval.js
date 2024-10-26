// src/components/AdminLoanApproval.js
import React, { useEffect, useState } from 'react';
import api from '../api/api';

function AdminLoanApproval() {
  const [loanApplications, setLoanApplications] = useState([]);

  useEffect(() => {
    async function fetchLoanApplications() {
      try {
        const response = await api.get('loan/pending/');
        setLoanApplications(response.data);
      } catch (error) {
        console.error("Error fetching loan applications:", error);
      }
    }
    fetchLoanApplications();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      await api.post(`loan/${id}/approve/`, { status });
      setLoanApplications(loanApplications.filter(app => app.id !== id));
    } catch (error) {
      console.error("Error updating loan status:", error);
    }
  };

  return (
    <div className="container">
      <h2>Loan Applications</h2>
      <ul className="list-group">
        {loanApplications.map((application) => (
          <li key={application.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <p><strong>Member ID:</strong> {application.memberId}</p>
              <p><strong>Loan Amount:</strong> ${application.amount}</p>
              <p><strong>Status:</strong> {application.status}</p>
            </div>
            <div>
              <button onClick={() => handleApproval(application.id, 'approved')} className="btn btn-success me-2">
                Approve
              </button>
              <button onClick={() => handleApproval(application.id, 'rejected')} className="btn btn-danger">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminLoanApproval;
