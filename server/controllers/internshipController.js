const Internship = require('../models/Internship');

exports.getAllInternships = async (req, res) => {
    try {
        const internships = await Internship.findAll();
        res.json(internships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInternshipById = async (req, res) => {
    try {
        const internship = await Internship.findById(req.params.id);
        if (!internship) {
            return res.status(404).json({ message: 'Internship not found' });
        }
        res.json(internship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createInternship = async (req, res) => {
    try {
        const internshipId = await Internship.create(req.body);
        res.status(201).json({ id: internshipId, ...req.body });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateInternship = async (req, res) => {
    try {
        await Internship.update(req.params.id, req.body);
        res.json({ message: 'Internship updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteInternship = async (req, res) => {
    try {
        await Internship.delete(req.params.id);
        res.json({ message: 'Internship deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 