import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../styles/FacultyDashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const FacultyDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [showReportsModal, setShowReportsModal] = useState(false);
  const [showStudentsModal, setShowStudentsModal] = useState(false);

  // Student data for the report
  const students = [
    { id: 1, name: 'Arpanjoot Kour', course: 'Computer Science', year: '3rd Year', gpa: 8.5, internshipStatus: 'Active' },
    { id: 2, name: 'Vansh Raina', course: 'Electrical Engineering', year: '2nd Year', gpa: 7.8, internshipStatus: 'Pending' },
    { id: 3, name: 'Angela Mary Promod', course: 'Mechanical Engineering', year: '4th Year', gpa: 9.2, internshipStatus: 'Active' },
    { id: 4, name: 'Omkar Desai', course: 'Civil Engineering', year: '3rd Year', gpa: 8.1, internshipStatus: 'Completed' },
    { id: 5, name: 'Sakshi', course: 'Computer Science', year: '2nd Year', gpa: 7.5, internshipStatus: 'Pending' }
  ];

  // Calculate student status distribution
  const statusCounts = students.reduce((acc, student) => {
    acc[student.internshipStatus] = (acc[student.internshipStatus] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  // Handle button clicks
  const handleReviewApplications = () => {
    setActiveSection('applications');
    setShowApplicationsModal(true);
    console.log('Opening applications review section');
  };

  const handleGenerateReports = () => {
    setActiveSection('reports');
    setShowReportsModal(true);
    console.log('Opening reports generation section');
  };

  const handleManageStudents = () => {
    setActiveSection('students');
    setShowStudentsModal(true);
    console.log('Opening student management section');
  };

  return (
    <div className="dashboard-container">
      <h1>Faculty Dashboard</h1>
      <div className="dashboard-content">
        <section className="stats-section">
          <h2>Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Students</h3>
              <p className="stat-number">150</p>
            </div>
            <div className="stat-card">
              <h3>Active Internships</h3>
              <p className="stat-number">45</p>
            </div>
            <div className="stat-card">
              <h3>Pending Approvals</h3>
              <p className="stat-number">12</p>
            </div>
          </div>
          
          <div className="chart-section">
            <div className="pie-chart-container">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
            <div className="chart-info">
              <h3>Student Internship Status Distribution</h3>
              <div className="status-breakdown">
                <p><span className="status-dot active"></span> Active: {statusCounts['Active'] || 0} students</p>
                <p><span className="status-dot pending"></span> Pending: {statusCounts['Pending'] || 0} students</p>
                <p><span className="status-dot completed"></span> Completed: {statusCounts['Completed'] || 0} students</p>
              </div>
              <p className="chart-description">
                This chart shows the current distribution of students across different internship statuses. 
                It helps track the progress of student internships and identify areas that need attention.
              </p>
            </div>
          </div>
        </section>
        
        <section className="actions-section">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="btn primary" onClick={handleReviewApplications}>Review Applications</button>
            <button className="btn secondary" onClick={handleGenerateReports}>Generate Reports</button>
            <button className="btn secondary" onClick={handleManageStudents}>Manage Students</button>
          </div>
        </section>

        {/* Modal placeholders - these would be replaced with actual modals in a real app */}
        {showApplicationsModal && (
          <div className="modal-placeholder">
            <h3>Review Applications</h3>
            <p>Application review interface would appear here</p>
            <button className="btn primary" onClick={() => setShowApplicationsModal(false)}>Close</button>
          </div>
        )}

        {showReportsModal && (
          <div className="modal-placeholder">
            <h3>Student Reports</h3>
            <div className="student-reports">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Year</th>
                    <th>GPA</th>
                    <th>Internship Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.course}</td>
                      <td>{student.year}</td>
                      <td>{student.gpa}</td>
                      <td>{student.internshipStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="report-actions">
                <button className="btn primary">Export to PDF</button>
                <button className="btn secondary">Export to Excel</button>
              </div>
            </div>
            <button className="btn primary" onClick={() => setShowReportsModal(false)}>Close</button>
          </div>
        )}

        {showStudentsModal && (
          <div className="modal-placeholder">
            <h3>Manage Students</h3>
            <p>Student management interface would appear here</p>
            <button className="btn primary" onClick={() => setShowStudentsModal(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDashboard; 