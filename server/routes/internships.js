const Internship = require('../models/Internship');

// Get all internships
exports.getInternships = async (req, res) => {
    try {
        const internships = await Internship.find({ status: 'active' })
            .sort({ createdAt: -1 });

        res.json(internships);
    } catch (error) {
        console.error('Get internships error:', error);
        res.status(500).json({ message: 'Error fetching internships' });
    }
};

// Create new internship (admin only)
exports.createInternship = async (req, res) => {
    try {
        const {
            title,
            company,
            description,
            duration,
            location,
            skillsRequired,
            responsibilities,
            requirements,
            benefits
        } = req.body;

        const internship = new Internship({
            title,
            company,
            description,
            duration,
            location,
            skillsRequired: skillsRequired.split(',').map(skill => skill.trim()),
            responsibilities: responsibilities.split(',').map(resp => resp.trim()),
            requirements: requirements.split(',').map(req => req.trim()),
            benefits: benefits.split(',').map(benefit => benefit.trim())
        });

        await internship.save();

        res.status(201).json({
            message: 'Internship created successfully',
            internship
        });
    } catch (error) {
        console.error('Create internship error:', error);
        res.status(500).json({ message: 'Error creating internship' });
    }
}; 