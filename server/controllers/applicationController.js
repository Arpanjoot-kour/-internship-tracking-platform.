const Application = require('../models/Application');

exports.applyForInternship = async (req, res) => {
    try {
        const applicationId = await Application.create({
            student_id: req.user.id,
            internship_id: req.params.internshipId
        });
        res.status(201).json({ message: 'Application submitted successfully', id: applicationId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getStudentApplications = async (req, res) => {
    try {
        const applications = await Application.findByStudentId(req.user.id);
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInternshipApplications = async (req, res) => {
    try {
        const applications = await Application.findByInternshipId(req.params.internshipId);
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateApplicationStatus = async (req, res) => {
    try {
        await Application.updateStatus(req.params.id, req.body.status);
        res.json({ message: 'Application status updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.assignMentor = async (req, res) => {
    try {
        await Application.assignMentor(req.params.id, req.body.mentorId);
        res.json({ message: 'Mentor assigned successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; 