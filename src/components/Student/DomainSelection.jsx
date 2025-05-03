import React from 'react';

const domains = [
    { id: 'software', name: 'Software Development', icon: '💻', count: 3 },
    { id: 'design', name: 'UI/UX Design', icon: '🎨', count: 2 },
    { id: 'data', name: 'Data Analysis', icon: '📊', count: 2 },
    { id: 'marketing', name: 'Marketing', icon: '📱', count: 1 },
    { id: 'security', name: 'Cybersecurity', icon: '🔒', count: 1 },
    { id: 'business', name: 'Business Analytics', icon: '📈', count: 1 },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: 1 },
    { id: 'cloud', name: 'Cloud Computing', icon: '☁️', count: 1 }
];

const DomainSelection = ({ selectedDomain, onDomainSelect }) => {
    return (
        <div className="domain-selection mt-4">
            <h5 className="mb-3">Quick Domain Selection</h5>
            {domains.map(domain => (
                <div
                    key={domain.id}
                    className={`domain-card mb-3 ${selectedDomain === domain.id ? 'active' : ''}`}
                    onClick={() => onDomainSelect(domain.id)}
                >
                    <div className="domain-icon">{domain.icon}</div>
                    <div className="domain-info">
                        <h6>{domain.name}</h6>
                        <p className="text-muted mb-0">{domain.count} positions available</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DomainSelection; 