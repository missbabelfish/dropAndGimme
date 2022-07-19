const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
cotent: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema,'tasks');