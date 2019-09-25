const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phone: { type: String, unique: true, required: true },
    sex: { type: String, required: true },
    salary: { type: String, required: true },
    position: { type: String, required: true },
    createAt: { type: Date,  default: Date.now, required: true },
});

const Worker = mongoose.model('Worker', Schema);

module.exports = Worker;