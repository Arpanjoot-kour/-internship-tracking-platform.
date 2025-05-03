import React from 'react';

const ApplicationList = ({ applications }) => {
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-warning';
            case 'accepted':
                return 'bg-success';
            case 'rejected':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    };

    return (
        <div>
            <h5 className="card-title">My Applications</h5>
            <div className="application-list">
                {applications.map(application => (
                    <div key={application.id} className="application-item">
                        <div className="application-info">
                            <h6>{application.title}</h6>
                            <p className="text-muted mb-0">{application.company}</p>
                            <small className="text-muted">Applied on: {application.date}</small>
                        </div>
                        <span className={`badge ${getStatusBadgeClass(application.status)}`}>
                            {application.status}
                        </span>
                    </div>
                ))}
                {applications.length === 0 && (
                    <div className="text-center text-muted py-3">
                        No applications yet. Start applying for internships!
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicationList; 