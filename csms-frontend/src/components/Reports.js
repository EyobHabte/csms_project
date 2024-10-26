// src/components/Reports.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';

function Reports() {
  const [reportData, setReportData] = useState([]);

  const generateReport = async () => {
    try {
      // Fetch report data (replace with actual API call)
      const data = await fetchReportData();
      setReportData(data);
      downloadPDF(data);
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  const downloadPDF = (data) => {
    const doc = new jsPDF();
    doc.text("Credit and Savings System Report", 20, 10);
    data.forEach((item, index) => {
      doc.text(`Member ID: ${item.memberId} - Balance: ${item.balance}`, 20, 20 + (index * 10));
    });
    doc.save("report.pdf");
  };

  const fetchReportData = async () => {
    // Placeholder data, replace with API call
    return [
      { memberId: 'RCD/3147/2013', balance: 5000 },
      { memberId: 'RCD/0382/2013', balance: 3000 },
    ];
  };

  return (
    <div className="container">
      <h2>Generate Reports</h2>
      <button className="btn btn-primary" onClick={generateReport}>Download Report</button>
      <ul className="list-group mt-3">
        {reportData.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong>Member ID:</strong> {item.memberId}, <strong>Balance:</strong> ${item.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
