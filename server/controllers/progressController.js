const Progress = require('../models/Progress');

exports.trackProgress = async (req, res) => {
    try {
        const progressId = await Progress.create({
            application_id: req.params.applicationId,
            milestone: req.body.milestone,
            status: req.body.status,
            completion_date: new Date()
        });
        res.status(201).json({ message: 'Progress tracked successfully', id: progressId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getApplicationProgress = async (req, res) => {
    try {
        const progress = await Progress.findByApplicationId(req.params.applicationId);
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProgressStatus = async (req, res) => {
    try {
        await Progress.updateStatus(req.params.id, req.body.status);
        res.json({ message: 'Progress status updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addFeedback = async (req, res) => {
    try {
        await Progress.addFeedback(req.params.id, req.body.feedback);
        res.json({ message: 'Feedback added successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; 