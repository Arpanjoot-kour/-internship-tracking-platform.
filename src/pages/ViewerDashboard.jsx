import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ViewerDashboard.css';

const ViewerDashboard = () => {
  const navigate = useNavigate();

  const demandingInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: '3 months',
      stipend: '$1000/month',
      skills: ['React', 'Node.js', 'MongoDB'],
      description: 'Join our dynamic team to work on cutting-edge web applications.'
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'Data Analytics Corp',
      location: 'Hybrid',
      duration: '6 months',
      stipend: '$1200/month',
      skills: ['Python', 'Machine Learning', 'SQL'],
      description: 'Work with big data and develop predictive models.'
    },
    {
      id: 3,
      title: 'Cloud Computing Intern',
      company: 'CloudTech Solutions',
      location: 'On-site',
      duration: '4 months',
      stipend: '$1500/month',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      description: 'Learn and implement cloud infrastructure solutions.'
    }
  ];

  const handleInternshipClick = (internshipId) => {
    // Navigate to student dashboard with the selected internship ID
    navigate('/student', { state: { selectedInternship: internshipId } });
  };

  return (
    <div className="viewer-dashboard">
      <div className="container mt-4">
        <section className="portal-info mb-5">
          <h1>Welcome to the Internship Portal</h1>
          <div className="info-content">
            <p>
              Our internship portal connects talented students with leading companies across various industries.
              We provide a seamless platform for students to find relevant internship opportunities and for
              companies to discover promising talent.
            </p>
            <div className="key-features mt-4">
              <h3>Key Features</h3>
              <ul>
                <li>Wide range of internship opportunities</li>
                <li>Easy application process</li>
                <li>Real-time tracking of applications</li>
                <li>Industry-specific guidance</li>
                <li>Career development resources</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="demanding-internships mb-5">
          <h2>Most Demanding Internships</h2>
          <div className="internship-cards">
            {demandingInternships.map(internship => (
              <div 
                key={internship.id} 
                className="internship-card"
                onClick={() => handleInternshipClick(internship.id)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{internship.title}</h3>
                <h4>{internship.company}</h4>
                <div className="internship-details">
                  <p><strong>Location:</strong> {internship.location}</p>
                  <p><strong>Duration:</strong> {internship.duration}</p>
                  <p><strong>Stipend:</strong> {internship.stipend}</p>
                  <p><strong>Required Skills:</strong></p>
                  <ul>
                    {internship.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                  <p>{internship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Information</h4>
              <p>Email: kourarpanjoot@gmail.com</p>
              <p>Name: Arpanjoot Kour</p>
              <p>Phone: 9797859119</p>
            </div>
            <div className="col-md-8">
              <h4>About Us</h4>
              <p>
                We are dedicated to bridging the gap between academic learning and professional experience.
                Our platform facilitates meaningful connections between students and industry leaders,
                helping shape the future of work through quality internships and mentorship opportunities.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViewerDashboard; 