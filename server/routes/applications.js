const Application = require('../models/Application');
const Internship = require('../models/Internship');
const User = require('../models/User');
const nodemailer = require('nodemailer');

// Create new application
exports.createApplication = async (req, res) => {
    try {
        const { internshipId, collegeName, yearOfStudy, branch, cgpa, skills, interestReason } = req.body;
        const resume = req.file;

        if (!resume) {
            return res.status(400).json({ message: 'Resume is required' });
        }

        // Create new application
        const application = new Application({
            student: req.user.userId,
            internship: internshipId,
            collegeName,
            yearOfStudy,
            branch,
            cgpa,
            skills: skills.split(',').map(skill => skill.trim()),
            interestReason,
            resume: resume.path
        });

        await application.save();

        // Send email notification
        const student = await User.findById(req.user.userId);
        const internship = await Internship.findById(internshipId);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: student.email,
            subject: 'Internship Application Submitted',
            text: `Dear ${student.fullName},\n\nYour application for ${internship.title} at ${internship.company} has been submitted successfully.\n\nBest regards,\nInternship Platform Team`
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            message: 'Application submitted successfully',
            application
        });
    } catch (error) {
        console.error('Application error:', error);
        res.status(500).json({ message: 'Error submitting application' });
    }
};

// Get user's applications
exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find({ student: req.user.userId })
            .populate('internship', 'title company')
            .sort({ createdAt: -1 });

        res.json(applications);
    } catch (error) {
        console.error('Get applications error:', error);
        res.status(500).json({ message: 'Error fetching applications' });
    }
}; 