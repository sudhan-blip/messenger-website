const express = require('express');
const { registerUser, loginUser, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, (req, res) => res.status(200).json(req.user));
router.get('/all', protect, getAllUsers); // Get all users for chat

module.exports = router;
