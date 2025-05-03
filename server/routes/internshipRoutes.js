const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.get('/', internshipController.getAllInternships);
router.get('/:id', internshipController.getInternshipById);

// Protected routes (admin only)
router.post('/', authMiddleware.isAdmin, internshipController.createInternship);
router.put('/:id', authMiddleware.isAdmin, internshipController.updateInternship);
router.delete('/:id', authMiddleware.isAdmin, internshipController.deleteInternship);

module.exports = router; 