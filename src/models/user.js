const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discordID: {
        type: String,
        required: true
    },
    discordTag: {
        type: String,
        required: true
    },
    guilds: {
        type: Array,
        required: true
    },
    accessToken: {
        type: String,
        required: false
    },
    refreshToken: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', UserSchema);