import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Student from '../components/Student/Student';

const StudentDashboard = () => {
  const location = useLocation();
  const [selectedInternship, setSelectedInternship] = useState(null);

  useEffect(() => {
    // Check if there's selected internship data passed from the viewer page
    if (location.state && location.state.selectedInternship) {
      setSelectedInternship(location.state.selectedInternship);
      console.log('Selected internship ID:', location.state.selectedInternship);
      
      // You can fetch internship details here based on the ID
      // For now, we'll just pass the ID to the Student component
    }
  }, [location]);

  return (
    <div className="student-dashboard">
      {selectedInternship && (
        <div className="alert alert-success">
          You've selected internship ID: {selectedInternship}. You can now apply for this position.
        </div>
      )}
      <Student selectedInternshipId={selectedInternship} />
    </div>
  );
};

export default StudentDashboard; 