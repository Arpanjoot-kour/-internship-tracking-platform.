import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Table } from 'react-bootstrap';
import './Faculty.css';

const Faculty = () => {
    const [selectedTab, setSelectedTab] = useState('applications');

    const applications = [
        {
            id: 1,
            student: 'John Doe',
            internship: 'Software Development Intern',
            company: 'Tech Solutions Inc.',
            status: 'Pending',
            date: '2024-03-15'
        },
        {
            id: 2,
            student: 'Jane Smith',
            internship: 'Data Science Intern',
            company: 'Data Analytics Corp',
            status: 'Approved',
            date: '2024-03-14'
        }
    ];

    const students = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            department: 'Computer Science',
            year: '3rd Year',
            applications: 2
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            department: 'Data Science',
            year: '4th Year',
            applications: 1
        }
    ];

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1>Faculty Dashboard</h1>
                    <div className="alert alert-info">
                        Welcome back, Faculty! Manage student applications and progress.
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex gap-2">
                        <Button
                            variant={selectedTab === 'applications' ? 'primary' : 'outline-primary'}
                            onClick={() => setSelectedTab('applications')}
                        >
                            Applications
                        </Button>
                        <Button
                            variant={selectedTab === 'students' ? 'primary' : 'outline-primary'}
                            onClick={() => setSelectedTab('students')}
                        >
                            Students
                        </Button>
                    </div>
                </div>
            </div>

            {selectedTab === 'applications' ? (
                <div className="row">
                    <div className="col-12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Student Applications</Card.Title>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Student</th>
                                            <th>Internship</th>
                                            <th>Company</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applications.map(app => (
                                            <tr key={app.id}>
                                                <td>{app.student}</td>
                                                <td>{app.internship}</td>
                                                <td>{app.company}</td>
                                                <td>
                                                    <span className={`badge bg-${app.status === 'Approved' ? 'success' : 'warning'}`}>
                                                        {app.status}
                                                    </span>
                                                </td>
                                                <td>{app.date}</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-2">
                                                        View
                                                    </Button>
                                                    <Button variant="outline-success" size="sm">
                                                        Approve
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Student List</Card.Title>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Department</th>
                                            <th>Year</th>
                                            <th>Applications</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>{student.department}</td>
                                                <td>{student.year}</td>
                                                <td>{student.applications}</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm">
                                                        View Profile
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Faculty; 