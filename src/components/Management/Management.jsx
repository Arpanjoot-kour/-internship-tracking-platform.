import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Table, Nav } from 'react-bootstrap';
import './Management.css';

const Management = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { title: 'Total Internships', value: '56', icon: '💼' },
        { title: 'Active Students', value: '234', icon: '👥' },
        { title: 'Companies', value: '23', icon: '🏢' },
        { title: 'Success Rate', value: '85%', icon: '📈' }
    ];

    const recentInternships = [
        {
            id: 1,
            title: 'Software Development Intern',
            company: 'Tech Solutions Inc.',
            students: 12,
            status: 'Active'
        },
        {
            id: 2,
            title: 'Data Science Intern',
            company: 'Data Analytics Corp',
            students: 8,
            status: 'Active'
        }
    ];

    return (
        <div className="container-fluid mt-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1>Management Dashboard</h1>
                    <div className="alert alert-info">
                        Welcome back, Management! Monitor and manage internship programs.
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Card className="mb-4">
                        <Card.Body>
                            <Nav className="flex-column">
                                <Nav.Link 
                                    active={activeTab === 'overview'}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    Overview
                                </Nav.Link>
                                <Nav.Link 
                                    active={activeTab === 'internships'}
                                    onClick={() => setActiveTab('internships')}
                                >
                                    Internships
                                </Nav.Link>
                                <Nav.Link 
                                    active={activeTab === 'companies'}
                                    onClick={() => setActiveTab('companies')}
                                >
                                    Companies
                                </Nav.Link>
                                <Nav.Link 
                                    active={activeTab === 'reports'}
                                    onClick={() => setActiveTab('reports')}
                                >
                                    Reports
                                </Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-9">
                    {activeTab === 'overview' && (
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
                                    <Card.Title>Recent Internships</Card.Title>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Company</th>
                                                <th>Students</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentInternships.map(internship => (
                                                <tr key={internship.id}>
                                                    <td>{internship.title}</td>
                                                    <td>{internship.company}</td>
                                                    <td>{internship.students}</td>
                                                    <td>
                                                        <span className={`badge bg-${internship.status === 'Active' ? 'success' : 'warning'}`}>
                                                            {internship.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <Button variant="outline-primary" size="sm" className="me-2">
                                                            View
                                                        </Button>
                                                        <Button variant="outline-success" size="sm">
                                                            Edit
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </>
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
                                            <th>Students</th>
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
                                            <td>12</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm" className="me-2">
                                                    View
                                                </Button>
                                                <Button variant="outline-success" size="sm" className="me-2">
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

                    {activeTab === 'companies' && (
                        <Card>
                            <Card.Body>
                                <Card.Title>Company Management</Card.Title>
                                <Button variant="primary" className="mb-4">Add New Company</Button>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Industry</th>
                                            <th>Location</th>
                                            <th>Internships</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tech Solutions Inc.</td>
                                            <td>Technology</td>
                                            <td>New York</td>
                                            <td>5</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm" className="me-2">
                                                    View
                                                </Button>
                                                <Button variant="outline-success" size="sm" className="me-2">
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

                    {activeTab === 'reports' && (
                        <Card>
                            <Card.Body>
                                <Card.Title>Reports</Card.Title>
                                <Form className="mb-4">
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Label>Report Type</Form.Label>
                                                <Form.Select>
                                                    <option>Internship Success Rate</option>
                                                    <option>Student Placement</option>
                                                    <option>Company Performance</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Label>Date Range</Form.Label>
                                                <Form.Select>
                                                    <option>Last 30 Days</option>
                                                    <option>Last 3 Months</option>
                                                    <option>Last 6 Months</option>
                                                    <option>Last Year</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Button variant="primary" className="w-100">Generate Report</Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                                <div className="report-placeholder">
                                    <p className="text-center text-muted">Select report type and date range to generate report</p>
                                </div>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Management; 