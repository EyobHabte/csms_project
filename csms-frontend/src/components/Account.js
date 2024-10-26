// src/components/Account.js
import React, { useEffect, useState } from 'react';
import api from '../api/api';

function Account() {
  const [accountInfo, setAccountInfo] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchAccountDetails() {
      try {
        const accountResponse = await api.get('account/details/');
        const transactionResponse = await api.get('account/transactions/');
        setAccountInfo(accountResponse.data);
        setTransactions(transactionResponse.data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    }
    fetchAccountDetails();
  }, []);

  return (
    <div className="container">
      <h2>Account Details</h2>
      <p><strong>Balance:</strong> ${accountInfo.balance}</p>

      <h3>Transaction History</h3>
      <ul className="list-group">
        {transactions.map((transaction, index) => (
          <li key={index} className="list-group-item">
            <p><strong>Type:</strong> {transaction.type}</p>
            <p><strong>Amount:</strong> ${transaction.amount}</p>
            <p><strong>Date:</strong> {transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Account;
