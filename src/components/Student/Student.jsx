import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DomainSelection from './DomainSelection';
import InternshipList from './InternshipList';
import ApplicationList from './ApplicationList';
import ProgressTracking from './ProgressTracking';
import './Student.css';

const Student = ({ selectedInternshipId }) => {
    const [selectedDomain, setSelectedDomain] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({ internship: '', company: '' });
    const [applications, setApplications] = useState([]);
    const [progress, setProgress] = useState(75);
    const [milestones, setMilestones] = useState([
        { id: 1, text: 'Profile Setup', status: 'completed' },
        { id: 2, text: 'Resume Upload', status: 'completed' },
        { id: 3, text: 'Application Submitted', status: 'active' },
        { id: 4, text: 'Interview Scheduled', status: 'pending' },
        { id: 5, text: 'Internship Started', status: 'pending' }
    ]);

    // Mock internship data that matches the IDs from ViewerDashboard
    const internshipData = {
        1: {
            title: 'Software Development Intern',
            company: 'Tech Solutions Inc.',
            location: 'Remote',
            duration: '3 months',
            stipend: '$1000/month',
            skills: ['React', 'Node.js', 'MongoDB'],
            description: 'Join our dynamic team to work on cutting-edge web applications.'
        },
        2: {
            title: 'Data Science Intern',
            company: 'Data Analytics Corp',
            location: 'Hybrid',
            duration: '6 months',
            stipend: '$1200/month',
            skills: ['Python', 'Machine Learning', 'SQL'],
            description: 'Work with big data and develop predictive models.'
        },
        3: {
            title: 'Cloud Computing Intern',
            company: 'CloudTech Solutions',
            location: 'On-site',
            duration: '4 months',
            stipend: '$1500/month',
            skills: ['AWS', 'Docker', 'Kubernetes'],
            description: 'Learn and implement cloud infrastructure solutions.'
        }
    };

    useEffect(() => {
        // Simulate loading student data
        const loadStudentData = async () => {
            // Here you would typically fetch data from your backend
            const mockApplications = [
                {
                    id: 1,
                    title: 'Software Development Intern',
                    company: 'Tech Company Inc.',
                    status: 'Pending',
                    date: '2024-03-15'
                },
                {
                    id: 2,
                    title: 'Marketing Intern',
                    company: 'Creative Agency',
                    status: 'Accepted',
                    date: '2024-03-14'
                }
            ];
            setApplications(mockApplications);
        };

        loadStudentData();
    }, []);

    // Effect to handle selected internship from viewer page
    useEffect(() => {
        if (selectedInternshipId && internshipData[selectedInternshipId]) {
            const internship = internshipData[selectedInternshipId];
            setModalData({
                internship: internship.title,
                company: internship.company
            });
            setShowModal(true);
        }
    }, [selectedInternshipId]);

    const handleDomainSelect = (domain) => {
        setSelectedDomain(domain);
    };

    const handleApplyClick = (internship, company) => {
        setModalData({ internship, company });
        setShowModal(true);
    };

    const handleSubmitApplication = (formData) => {
        // Here you would typically send the form data to your backend
        const newApplication = {
            id: applications.length + 1,
            title: formData.internship,
            company: formData.company,
            status: 'Pending',
            date: new Date().toISOString().split('T')[0]
        };
        setApplications([newApplication, ...applications]);
        setShowModal(false);
        updateProgress();
    };

    const updateProgress = () => {
        const completedMilestones = milestones.filter(m => m.status === 'completed').length;
        const newProgress = (completedMilestones / milestones.length) * 100;
        setProgress(newProgress);
    };

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1>Student Dashboard</h1>
                    <div className="alert alert-info">
                        Welcome back, Student! Here's your internship overview.
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <ApplicationList applications={applications} />
                            <DomainSelection 
                                selectedDomain={selectedDomain}
                                onDomainSelect={handleDomainSelect}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Available Internships</h5>
                            <InternshipList 
                                selectedDomain={selectedDomain}
                                onApplyClick={handleApplyClick}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <ProgressTracking 
                        progress={progress}
                        milestones={milestones}
                    />
                </div>
            </div>

            <ApplicationModal 
                show={showModal}
                onHide={() => setShowModal(false)}
                data={modalData}
                onSubmit={handleSubmitApplication}
            />
        </div>
    );
};

const ApplicationModal = ({ show, onHide, data, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            internship: data.internship,
            company: data.company,
            collegeName: e.target.collegeName.value,
            yearOfStudy: e.target.yearOfStudy.value,
            branch: e.target.branch.value,
            cgpa: e.target.cgpa.value,
            skills: e.target.skills.value,
            interestReason: e.target.interestReason.value,
            resume: e.target.resume.files[0]
        };
        onSubmit(formData);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Apply for {data.internship}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="internshipApplicationForm" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Internship Position</Form.Label>
                        <Form.Control type="text" value={data.internship} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" value={data.company} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control type="text" name="collegeName" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Year of Study</Form.Label>
                        <Form.Select name="yearOfStudy" required>
                            <option value="">Select Year</option>
                            <option value="1">First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Branch</Form.Label>
                        <Form.Control type="text" name="branch" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>CGPA</Form.Label>
                        <Form.Control type="number" name="cgpa" step="0.01" min="0" max="10" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control as="textarea" name="skills" rows="3" required />
                        <Form.Text className="text-muted">Separate skills with commas</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Why are you interested in this internship?</Form.Label>
                        <Form.Control as="textarea" name="interestReason" rows="3" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Upload Resume</Form.Label>
                        <Form.Control type="file" name="resume" accept=".pdf,.doc,.docx" required />
                    </Form.Group>
                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="primary" type="submit">Submit Application</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Student; 