// models/session.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600 // Session expires after 1 hour (in seconds)
    }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
