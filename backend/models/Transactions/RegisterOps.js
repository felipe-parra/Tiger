const mongoose = require('mongoose');

const regOpsSchema = new mongoose.Schema({});

module.exports = mongoose.model('RegisterOps', regOpsSchema);
