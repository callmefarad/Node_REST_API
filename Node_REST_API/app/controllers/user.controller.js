// const express = require('express');
const userModel = require('../models/user.model');


// get all users
const allUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

// create a user
const newUser = async (req, res) => {
    try {
        const addNewUser = await userModel.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        res.status(201).json({ addNewUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// get a user
const singleUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.json(user)
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
    
}

// uptdat a user
const editUser = async (req, res) => {
    
    try {
        const user = await userModel.findById(req.params.id);
        const updateUser = await user.updateOne(req.body);
        res.json(updateUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const del = await user.deleteOne();
        res.json({ message: "User has been deleted" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    allUsers,
    newUser,
    singleUser,
    editUser,
    deleteUser
};