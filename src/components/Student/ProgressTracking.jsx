import React from 'react';

const ProgressTracking = ({ progress, milestones }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Progress Tracking</h5>
                <div className="progress mb-3">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {progress}%
                    </div>
                </div>
                <div className="milestones">
                    {milestones.map(milestone => (
                        <div key={milestone.id} className={`milestone-item ${milestone.status}`}>
                            <span className="milestone-icon">
                                {milestone.status === 'completed' ? '✓' : 
                                 milestone.status === 'active' ? '●' : '○'}
                            </span>
                            <span>{milestone.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressTracking; 