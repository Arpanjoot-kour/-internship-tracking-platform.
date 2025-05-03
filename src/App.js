import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

// Import pages
import ViewerDashboard from './pages/ViewerDashboard';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ManagementDashboard from './pages/ManagementDashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">Internship Platform</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/viewer">Viewer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/student">Student</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faculty">Faculty</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/management">Management</Link>
                </li>
              </ul>
              <div className="d-flex">
                <Link to="/login" className="btn btn-outline-light ms-2">Login</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/viewer" element={<ViewerDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/faculty" element={<FacultyDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/management" element={<ManagementDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ViewerDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 