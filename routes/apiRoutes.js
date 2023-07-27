// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const thoughtController = require('../controllers/thoughtController');


// Users routes
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:userId', userController.getOneUser);
router.post('/api/users', userController.createUser);
router.put('/api/users/:userId', userController.updateUser);
router.delete('/api/users/:userId', userController.deleteUser);
router.post('/api/users/:userId/friends/:friendId', userController.addFriend);
router.delete('/api/users/:userId/friends/:friendId', userController.removeFriend);

// Thoughts routes
router.get('/api/thoughts', thoughtController.getAllThoughts);
router.get('/api/thoughts/:thoughtId', thoughtController.getOneThought);
router.post('/api/thoughts', thoughtController.createThought);
router.put('/api/thoughts/:thoughtId', thoughtController.updateThought);
router.delete('/api/thoughts/:thoughtId', thoughtController.deleteThought);
router.post('/api/thoughts/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;