import React, { useEffect, useState } from 'react';
import '../styles/ManagementDashboard.css';

function ManagementDashboard() {
    const [managementData, setManagementData] = useState({
        totalInternships: 24,
        activeStudents: 156,
        completionRate: 92,
        resourceAllocation: {
            facultyMentors: 75,
            industryPartners: 60,
            fundingUtilization: 85
        },
        programGoals: {
            studentPlacement: {
                current: 156,
                target: 200
            },
            industryPartnerships: {
                current: 24,
                target: 50
            }
        },
        performanceMetrics: {
            averageGPA: 3.8,
            placementRate: 85,
            internshipCompletion: 92,
            skillDevelopment: 88,
            studentSatisfaction: 90,
            monthlyProgress: [
                { month: 'Jan', progress: 75 },
                { month: 'Feb', progress: 82 },
                { month: 'Mar', progress: 88 },
                { month: 'Apr', progress: 92 }
            ]
        }
    });

    const [showResourceModal, setShowResourceModal] = useState(false);
    const [showGoalsModal, setShowGoalsModal] = useState(false);
    const [showReportsModal, setShowReportsModal] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        loadManagementData();
        setupEventListeners();
        updatePerformanceMetrics();
    }, []);

    const loadManagementData = () => {
        console.log('Loading management data...');
        // TODO: Implement actual data loading
    };

    const setupEventListeners = () => {
        console.log('Setting up event listeners...');
        // TODO: Implement actual event listeners
    };

    const updatePerformanceMetrics = () => {
        console.log('Updating performance metrics...');
        // TODO: Implement actual metrics updating
    };

    const updateResourceAllocation = (resourceId, percentage) => {
        setManagementData(prevData => ({
            ...prevData,
            resourceAllocation: {
                ...prevData.resourceAllocation,
                [resourceId]: percentage
            }
        }));
    };

    const updateProgramGoal = (goalId, current, target) => {
        setManagementData(prevData => ({
            ...prevData,
            programGoals: {
                ...prevData.programGoals,
                [goalId]: { current, target }
            }
        }));
    };

    const refreshDashboard = () => {
        setIsRefreshing(true);
        console.log('Refreshing dashboard data...');
        
        // Simulate a refresh operation
        setTimeout(() => {
            // Update some random values to show the refresh worked
            setManagementData(prevData => ({
                ...prevData,
                totalInternships: prevData.totalInternships + Math.floor(Math.random() * 3) - 1,
                activeStudents: prevData.activeStudents + Math.floor(Math.random() * 5) - 2,
                completionRate: Math.min(100, Math.max(0, prevData.completionRate + Math.floor(Math.random() * 5) - 2))
            }));
            
            setIsRefreshing(false);
            console.log('Dashboard refreshed successfully');
        }, 1500);
    };

    const handleResourceClick = () => {
        setShowResourceModal(true);
        console.log('Opening resource allocation modal');
    };

    const handleGoalsClick = () => {
        setShowGoalsModal(true);
        console.log('Opening program goals modal');
    };

    const handleReportsClick = () => {
        setShowReportsModal(true);
        console.log('Opening reports modal');
    };

    return (
        <div className="management-dashboard">
            <div className="container">
                <h1>Management Dashboard</h1>
                
                <div className="alert alert-info">
                    Welcome to the Management Dashboard. Here you can monitor program performance and manage resources.
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Program Statistics</h5>
                                <div className="stats-list">
                                    <div className="stat-item">
                                        <h6>Total Internships</h6>
                                        <p className="stat-value">{managementData.totalInternships}</p>
                                    </div>
                                    <div className="stat-item">
                                        <h6>Active Students</h6>
                                        <p className="stat-value">{managementData.activeStudents}</p>
                                    </div>
                                    <div className="stat-item">
                                        <h6>Success Rate</h6>
                                        <p className="stat-value">{managementData.completionRate}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Performance Metrics</h5>
                                <div className="performance-metrics">
                                    <div className="metric-item">
                                        <h6>Average GPA</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${(managementData.performanceMetrics.averageGPA / 4) * 100}%` }}
                                                aria-valuenow={managementData.performanceMetrics.averageGPA}
                                                aria-valuemin="0"
                                                aria-valuemax="4"
                                            >
                                                {managementData.performanceMetrics.averageGPA}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <h6>Placement Rate</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${managementData.performanceMetrics.placementRate}%` }}
                                                aria-valuenow={managementData.performanceMetrics.placementRate}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {managementData.performanceMetrics.placementRate}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <h6>Skill Development</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${managementData.performanceMetrics.skillDevelopment}%` }}
                                                aria-valuenow={managementData.performanceMetrics.skillDevelopment}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {managementData.performanceMetrics.skillDevelopment}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <h6>Student Satisfaction</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${managementData.performanceMetrics.studentSatisfaction}%` }}
                                                aria-valuenow={managementData.performanceMetrics.studentSatisfaction}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {managementData.performanceMetrics.studentSatisfaction}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resource Allocation</h5>
                                <div className="resource-list">
                                    <div className="resource-item" onClick={handleResourceClick} style={{ cursor: 'pointer' }}>
                                        <h6>Faculty Mentors</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${managementData.resourceAllocation.facultyMentors}%` }}
                                                aria-valuenow={managementData.resourceAllocation.facultyMentors}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {managementData.resourceAllocation.facultyMentors}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resource-item" onClick={handleResourceClick} style={{ cursor: 'pointer' }}>
                                        <h6>Industry Partners</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${managementData.resourceAllocation.industryPartners}%` }}
                                                aria-valuenow={managementData.resourceAllocation.industryPartners}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {managementData.resourceAllocation.industryPartners}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resource-item" onClick={handleResourceClick} style={{ cursor: 'pointer' }}>
                                        <h6>Funding Utilization</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${managementData.resourceAllocation.fundingUtilization}%` }}
                                                aria-valuenow={managementData.resourceAllocation.fundingUtilization}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {managementData.resourceAllocation.fundingUtilization}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Program Goals</h5>
                                <div className="goals-list">
                                    <div className="goal-item" onClick={handleGoalsClick} style={{ cursor: 'pointer' }}>
                                        <h6>Student Placement</h6>
                                        <p className="text-muted">Target: {managementData.programGoals.studentPlacement.target} students</p>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${(managementData.programGoals.studentPlacement.current / managementData.programGoals.studentPlacement.target) * 100}%` }}
                                                aria-valuenow={(managementData.programGoals.studentPlacement.current / managementData.programGoals.studentPlacement.target) * 100}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {Math.round((managementData.programGoals.studentPlacement.current / managementData.programGoals.studentPlacement.target) * 100)}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="goal-item" onClick={handleGoalsClick} style={{ cursor: 'pointer' }}>
                                        <h6>Industry Partnerships</h6>
                                        <p className="text-muted">Target: {managementData.programGoals.industryPartnerships.target} companies</p>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${(managementData.programGoals.industryPartnerships.current / managementData.programGoals.industryPartnerships.target) * 100}%` }}
                                                aria-valuenow={(managementData.programGoals.industryPartnerships.current / managementData.programGoals.industryPartnerships.target) * 100}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {Math.round((managementData.programGoals.industryPartnerships.current / managementData.programGoals.industryPartnerships.target) * 100)}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <button 
                            className="btn btn-primary" 
                            onClick={refreshDashboard}
                            disabled={isRefreshing}
                        >
                            {isRefreshing ? 'Refreshing...' : 'Refresh Dashboard'}
                        </button>
                        <button 
                            className="btn btn-secondary" 
                            onClick={handleReportsClick}
                        >
                            Generate Reports
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal placeholders - these would be replaced with actual modals in a real app */}
            {showResourceModal && (
                <div className="modal-placeholder">
                    <h3>Resource Allocation</h3>
                    <p>Resource allocation interface would appear here</p>
                    <button className="btn btn-primary" onClick={() => setShowResourceModal(false)}>Close</button>
                </div>
            )}

            {showGoalsModal && (
                <div className="modal-placeholder">
                    <h3>Program Goals</h3>
                    <p>Program goals interface would appear here</p>
                    <button className="btn btn-primary" onClick={() => setShowGoalsModal(false)}>Close</button>
                </div>
            )}

            {showReportsModal && (
                <div className="modal-placeholder">
                    <h3>Generate Reports</h3>
                    <p>Report generation interface would appear here</p>
                    <button className="btn btn-primary" onClick={() => setShowReportsModal(false)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default ManagementDashboard; 