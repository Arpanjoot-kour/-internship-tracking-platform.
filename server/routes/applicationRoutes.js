const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

// Student routes
router.post('/:internshipId', authMiddleware.isStudent, applicationController.applyForInternship);
router.get('/my-applications', authMiddleware.isStudent, applicationController.getStudentApplications);

// Faculty routes
router.get('/internship/:internshipId', authMiddleware.isFaculty, applicationController.getInternshipApplications);
router.put('/:id/status', authMiddleware.isFaculty, applicationController.updateApplicationStatus);
router.put('/:id/assign-mentor', authMiddleware.isFaculty, applicationController.assignMentor);

module.exports = router; 