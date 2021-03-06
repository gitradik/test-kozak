const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    login: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: false }
});

const User = mongoose.model('User', Schema);

module.exports = User;