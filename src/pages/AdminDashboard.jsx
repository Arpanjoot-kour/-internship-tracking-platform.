import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import '../styles/FacultyDashboard.css'; // We can reuse the dashboard styles

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showUserModal, setShowUserModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showReportsModal, setShowReportsModal] = useState(false);
  const [showStudentsModal, setShowStudentsModal] = useState(false);
  const [report, setReport] = useState(null);

  const students = [
    { id: 1, name: 'Arpanjoot Kour', course: 'Computer Science', year: '3rd Year' },
    { id: 2, name: 'Vansh Raina', course: 'Electrical Engineering', year: '2nd Year' },
    { id: 3, name: 'Angela Mary Promod', course: 'Mechanical Engineering', year: '4th Year' },
    { id: 4, name: 'Omkar Desai', course: 'Civil Engineering', year: '3rd Year' },
    { id: 5, name: 'Sakshi', course: 'Computer Science', year: '2nd Year' }
  ];

  // Prepare data for pie chart
  const courseDistribution = students.reduce((acc, student) => {
    acc[student.course] = (acc[student.course] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(courseDistribution),
    datasets: [
      {
        data: Object.values(courseDistribution),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
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
      title: {
        display: true,
        text: 'Student Distribution by Course',
      },
    },
  };

  // Handle button clicks
  const handleManageUsers = () => {
    setActiveSection('users');
    setShowUserModal(true);
    console.log('Opening user management section');
  };

  const handleSystemSettings = () => {
    setActiveSection('settings');
    setShowSettingsModal(true);
    console.log('Opening system settings section');
  };

  const handleViewReports = () => {
    setActiveSection('reports');
    setShowReportsModal(true);
    console.log('Opening reports section');
  };

  const handleManageStudents = () => {
    setShowStudentsModal(true);
  };

  const generateReport = () => {
    const dummyReport = {
      title: 'Internship Program Report',
      date: new Date().toLocaleDateString(),
      summary: {
        totalStudents: 250,
        activeInternships: 75,
        placementRate: '85%',
        averageDuration: '3 months'
      },
      recommendations: [
        'Increase industry partnerships',
        'Expand program to more departments',
        'Implement new tracking system'
      ]
    };
    setReport(dummyReport);
    setShowReportsModal(true);
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-content">
        <section className="stats-section">
          <h2>System Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-number">250</p>
            </div>
            <div className="stat-card">
              <h3>Active Companies</h3>
              <p className="stat-number">30</p>
            </div>
            <div className="stat-card">
              <h3>Total Internships</h3>
              <p className="stat-number">75</p>
            </div>
          </div>
        </section>

        <section className="chart-section">
          <div className="chart-container" style={{ width: '400px', height: '400px' }}>
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </section>
        
        <section className="actions-section">
          <h2>Administrative Actions</h2>
          <div className="action-buttons">
            <button className="btn primary" onClick={handleManageUsers}>Manage Users</button>
            <button className="btn secondary" onClick={handleSystemSettings}>System Settings</button>
            <button className="btn secondary" onClick={handleManageStudents}>Manage Students</button>
            <button className="btn primary" onClick={generateReport}>Generate Report</button>
          </div>
        </section>

        {/* Modal placeholders - these would be replaced with actual modals in a real app */}
        {showUserModal && (
          <div className="modal-placeholder">
            <h3>User Management</h3>
            <p>User management interface would appear here</p>
            <button className="btn primary" onClick={() => setShowUserModal(false)}>Close</button>
          </div>
        )}

        {showSettingsModal && (
          <div className="modal-placeholder">
            <h3>System Settings</h3>
            <p>System settings interface would appear here</p>
            <button className="btn primary" onClick={() => setShowSettingsModal(false)}>Close</button>
          </div>
        )}

        {showStudentsModal && (
          <div className="modal-placeholder">
            <h3>Student List</h3>
            <div className="student-list">
              {students.map(student => (
                <div key={student.id} className="student-item">
                  <h4>{student.name}</h4>
                  <p>Course: {student.course}</p>
                  <p>Year: {student.year}</p>
                </div>
              ))}
            </div>
            <button className="btn primary" onClick={() => setShowStudentsModal(false)}>Close</button>
          </div>
        )}

        {showReportsModal && report && (
          <div className="modal-placeholder">
            <h3>{report.title}</h3>
            <p>Generated on: {report.date}</p>
            <div className="report-summary">
              <h4>Summary</h4>
              <ul>
                <li>Total Students: {report.summary.totalStudents}</li>
                <li>Active Internships: {report.summary.activeInternships}</li>
                <li>Placement Rate: {report.summary.placementRate}</li>
                <li>Average Duration: {report.summary.averageDuration}</li>
              </ul>
            </div>
            <div className="report-recommendations">
              <h4>Recommendations</h4>
              <ul>
                {report.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            <button className="btn primary" onClick={() => setShowReportsModal(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 