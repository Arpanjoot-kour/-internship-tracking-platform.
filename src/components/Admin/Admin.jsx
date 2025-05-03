import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Table, Nav } from 'react-bootstrap';
import './Admin.css';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const stats = [
        { title: 'Total Students', value: '1,234', icon: '👥' },
        { title: 'Active Internships', value: '56', icon: '💼' },
        { title: 'Companies', value: '23', icon: '🏢' },
        { title: 'Applications', value: '789', icon: '📝' }
    ];

    const recentActivities = [
        {
            id: 1,
            action: 'New Application',
            user: 'John Doe',
            details: 'Applied for Software Development Intern',
            time: '2 hours ago'
        },
        {
            id: 2,
            action: 'Application Approved',
            user: 'Jane Smith',
            details: 'Data Science Intern at Tech Corp',
            time: '5 hours ago'
        }
    ];

    return (
        <div className="container-fluid mt-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1>Admin Dashboard</h1>
                    <div className="alert alert-info">
                        Welcome back, Admin! Manage the internship platform.
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Card className="mb-4">
                        <Card.Body>
                            <Nav className="flex-column">
                                <Nav.Link 
                                    active={activeTab === 'dashboard'}
                                    onClick={() => setActiveTab('dashboard')}
                                >
                                    Dashboard
                                </Nav.Link>
                                <Nav.Link 
                                    active={activeTab === 'users'}
                                    onClick={() => setActiveTab('users')}
                                >
                                    Users
                                </Nav.Link>
                                <Nav.Link 
                                    active={activeTab === 'internships'}
                                    onClick={() => setActiveTab('internships')}
                                >
                                    Internships
                                </Nav.Link>
                                <Nav.Link 
                                    active={activeTab === 'settings'}
                                    onClick={() => setActiveTab('settings')}
                                >
                                    Settings
                                </Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-9">
                    {activeTab === 'dashboard' && (
                        <>
                            <div className="row mb-4">
                                {stats.map((stat, index) => (
                                    <Col key={index} md={3} className="mb-4">
                                        <Card className="h-100">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className="text-muted">{stat.title}</h6>
                                                        <h3>{stat.value}</h3>
                                                    </div>
                                                    <div className="stat-icon">{stat.icon}</div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </div>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Recent Activities</Card.Title>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>User</th>
                                                <th>Details</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentActivities.map(activity => (
                                                <tr key={activity.id}>
                                                    <td>{activity.action}</td>
                                                    <td>{activity.user}</td>
                                                    <td>{activity.details}</td>
                                                    <td>{activity.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </>
                    )}

                    {activeTab === 'users' && (
                        <Card>
                            <Card.Body>
                                <Card.Title>User Management</Card.Title>
                                <Form className="mb-4">
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Search users..." />
                                            </Form.Group>
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="primary" className="w-100">Search</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John Doe</td>
                                            <td>john@example.com</td>
                                            <td>Student</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm" className="me-2">
                                                    Edit
                                                </Button>
                                                <Button variant="outline-danger" size="sm">
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    )}

                    {activeTab === 'internships' && (
                        <Card>
                            <Card.Body>
                                <Card.Title>Internship Management</Card.Title>
                                <Button variant="primary" className="mb-4">Add New Internship</Button>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Company</th>
                                            <th>Location</th>
                                            <th>Duration</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Software Development Intern</td>
                                            <td>Tech Solutions Inc.</td>
                                            <td>On-site</td>
                                            <td>6 months</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm" className="me-2">
                                                    Edit
                                                </Button>
                                                <Button variant="outline-danger" size="sm">
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    )}

                    {activeTab === 'settings' && (
                        <Card>
                            <Card.Body>
                                <Card.Title>Platform Settings</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Platform Name</Form.Label>
                                        <Form.Control type="text" defaultValue="Internship Platform" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Settings</Form.Label>
                                        <Form.Control type="email" placeholder="admin@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Application Deadline</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Button variant="primary">Save Changes</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin; 