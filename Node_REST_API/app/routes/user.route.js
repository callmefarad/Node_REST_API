const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');



// get all users
router.get('/', userController.allUsers);

// get a user
router.get('/:id', userController.singleUser);

// create a user
router.post('/', userController.newUser);

// uptdat a user
router.put('/:id', userController.editUser);

// delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;