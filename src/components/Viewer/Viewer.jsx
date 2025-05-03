import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import './Viewer.css';

const Viewer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const internships = [
        {
            id: 1,
            title: 'Software Development Intern',
            company: 'Tech Solutions Inc.',
            location: 'On-site',
            duration: '6 months',
            skills: ['JavaScript', 'React', 'Node.js'],
            description: 'Join our team to work on cutting-edge web applications.',
            category: 'Development',
            postedDate: '2024-04-20',
            salary: '$25/hr',
            applicationDeadline: '2024-05-15'
        },
        {
            id: 2,
            title: 'Data Science Intern',
            company: 'Data Analytics Corp',
            location: 'Remote',
            duration: '3 months',
            skills: ['Python', 'Machine Learning', 'SQL'],
            description: 'Work on real-world data analysis projects.',
            category: 'Data Science',
            postedDate: '2024-04-19',
            salary: '$30/hr',
            applicationDeadline: '2024-05-10'
        },
        {
            id: 3,
            title: 'UI/UX Design Intern',
            company: 'Creative Design Studio',
            location: 'Hybrid',
            duration: '4 months',
            skills: ['Figma', 'Adobe XD', 'UI Design'],
            description: 'Create beautiful and intuitive user interfaces.',
            category: 'Design',
            postedDate: '2024-04-18',
            salary: '$22/hr',
            applicationDeadline: '2024-05-20'
        }
    ];

    const categories = ['All', 'Development', 'Data Science', 'Design', 'Marketing', 'Business'];

    const stats = {
        totalInternships: internships.length,
        activeCompanies: 15,
        averageSalary: '$26/hr',
        remoteOpportunities: 8
    };

    const recentUpdates = [
        { id: 1, text: 'New internship posted by Tech Solutions Inc.', date: '2024-04-20' },
        { id: 2, text: 'Application deadline extended for Data Science position', date: '2024-04-19' },
        { id: 3, text: 'New company joined the platform', date: '2024-04-18' }
    ];

    const filteredInternships = internships.filter(internship => {
        const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            internship.company.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || internship.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mt-4">
            {/* Header Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <h1>Internship Viewer</h1>
                    <div className="alert alert-info">
                        Browse available internships and their details.
                    </div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="row mb-4">
                <div className="col-md-8">
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search internships..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button variant="primary">Search</Button>
                    </InputGroup>
                </div>
                <div className="col-md-4">
                    <Form.Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category.toLowerCase()}>
                                {category}
                            </option>
                        ))}
                    </Form.Select>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <Card className="stats-card">
                        <Card.Body>
                            <Row>
                                <Col md={3}>
                                    <div className="stat-item">
                                        <h4>{stats.totalInternships}</h4>
                                        <p>Total Internships</p>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="stat-item">
                                        <h4>{stats.activeCompanies}</h4>
                                        <p>Active Companies</p>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="stat-item">
                                        <h4>{stats.averageSalary}</h4>
                                        <p>Average Salary</p>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="stat-item">
                                        <h4>{stats.remoteOpportunities}</h4>
                                        <p>Remote Opportunities</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Main Content */}
            <div className="row">
                {/* Internships List */}
                <div className="col-md-8">
                    <h3 className="mb-3">Available Internships</h3>
                    <div className="row">
                        {filteredInternships.map(internship => (
                            <Col key={internship.id} md={6} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Title>{internship.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {internship.company}
                                        </Card.Subtitle>
                                        <div className="mb-3">
                                            <Badge bg="primary" className="me-2">{internship.location}</Badge>
                                            <Badge bg="secondary" className="me-2">{internship.duration}</Badge>
                                            <Badge bg="info">{internship.salary}</Badge>
                                        </div>
                                        <Card.Text>{internship.description}</Card.Text>
                                        <div className="skills-section mb-3">
                                            <h6>Required Skills:</h6>
                                            <div className="skills-tags">
                                                {internship.skills.map((skill, index) => (
                                                    <Badge key={index} bg="light" text="dark" className="me-1">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">
                                                Deadline: {internship.applicationDeadline}
                                            </small>
                                            <Button variant="primary">View Details</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-md-4">
                    {/* Recent Updates */}
                    <Card className="mb-4">
                        <Card.Header>
                            <h5 className="mb-0">Recent Updates</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="updates-list">
                                {recentUpdates.map(update => (
                                    <div key={update.id} className="update-item mb-3">
                                        <p className="mb-1">{update.text}</p>
                                        <small className="text-muted">{update.date}</small>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Categories */}
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Categories</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="categories-list">
                                {categories.map(category => (
                                    <Badge
                                        key={category}
                                        bg={selectedCategory === category.toLowerCase() ? 'primary' : 'light'}
                                        text={selectedCategory === category.toLowerCase() ? 'light' : 'dark'}
                                        className="me-2 mb-2 category-badge"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedCategory(category.toLowerCase())}
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Viewer; 