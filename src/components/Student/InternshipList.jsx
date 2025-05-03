import React from 'react';
import { Button } from 'react-bootstrap';

const internships = [
    {
        id: 1,
        title: 'Software Development Intern',
        company: 'Tech Solutions Inc.',
        field: 'software',
        location: 'onsite',
        duration: 6,
        skills: ['JavaScript', 'React', 'Node.js']
    },
    {
        id: 2,
        title: 'UI/UX Design Intern',
        company: 'Design Studio',
        field: 'design',
        location: 'hybrid',
        duration: 2,
        skills: ['Figma', 'Adobe XD', 'User Research']
    },
    {
        id: 3,
        title: 'Data Analysis Intern',
        company: 'Research Institute',
        field: 'data',
        location: 'remote',
        duration: 3,
        skills: ['Python', 'SQL', 'Data Visualization']
    },
    {
        id: 4,
        title: 'Marketing Intern',
        company: 'Digital Marketing Agency',
        field: 'marketing',
        location: 'remote',
        duration: 3,
        skills: ['Social Media', 'Content Creation', 'Analytics']
    },
    {
        id: 5,
        title: 'Cybersecurity Intern',
        company: 'Security Solutions Ltd.',
        field: 'security',
        location: 'hybrid',
        duration: 4,
        skills: ['Network Security', 'Ethical Hacking', 'Linux']
    },
    {
        id: 6,
        title: 'Business Analytics Intern',
        company: 'Consulting Firm',
        field: 'business',
        location: 'onsite',
        duration: 3,
        skills: ['Excel', 'Tableau', 'Business Intelligence']
    },
    {
        id: 7,
        title: 'AI/ML Intern',
        company: 'AI Research Lab',
        field: 'ai',
        location: 'remote',
        duration: 6,
        skills: ['Python', 'TensorFlow', 'Machine Learning']
    },
    {
        id: 8,
        title: 'Cloud Computing Intern',
        company: 'Cloud Services Provider',
        field: 'cloud',
        location: 'hybrid',
        duration: 4,
        skills: ['AWS', 'Azure', 'DevOps']
    }
];

const getLocationBadgeClass = (location) => {
    switch (location) {
        case 'remote':
            return 'bg-success';
        case 'hybrid':
            return 'bg-info';
        case 'onsite':
            return 'bg-primary';
        default:
            return 'bg-secondary';
    }
};

const InternshipList = ({ selectedDomain, onApplyClick }) => {
    const filteredInternships = selectedDomain
        ? internships.filter(internship => internship.field === selectedDomain)
        : internships;

    return (
        <div className="internship-list">
            {filteredInternships.map(internship => (
                <div
                    key={internship.id}
                    className="internship-item position-relative"
                    data-field={internship.field}
                    data-location={internship.location}
                    data-duration={internship.duration}
                >
                    <div className="internship-header">
                        <h6 className="internship-title">{internship.title}</h6>
                        <p className="company-name">{internship.company}</p>
                        <span className={`badge ${getLocationBadgeClass(internship.location)} location-badge`}>
                            {internship.location.charAt(0).toUpperCase() + internship.location.slice(1)}
                        </span>
                    </div>
                    <div className="internship-details">
                        <div className="internship-info">
                            <p className="mb-2"><strong>Duration:</strong> {internship.duration} months</p>
                            <div className="skills-container">
                                <p className="mb-1"><strong>Skills Required:</strong></p>
                                <div className="skills-tags">
                                    {internship.skills.map((skill, index) => (
                                        <span key={index} className="badge bg-secondary">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="internship-actions">
                        <Button
                            variant="primary"
                            className="btn-apply"
                            onClick={() => onApplyClick(internship.title, internship.company)}
                        >
                            Apply Now
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InternshipList; 