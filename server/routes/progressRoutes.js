const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

// Student routes
router.get('/:applicationId', authMiddleware.isStudent, progressController.getApplicationProgress);

// Faculty routes
router.post('/:applicationId', authMiddleware.isFaculty, progressController.trackProgress);
router.put('/:id/status', authMiddleware.isFaculty, progressController.updateProgressStatus);
router.put('/:id/feedback', authMiddleware.isFaculty, progressController.addFeedback);

module.exports = router; 