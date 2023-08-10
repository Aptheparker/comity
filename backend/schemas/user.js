const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema
({
    name:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    studentID:
    {
        type: Number,
        required: true,
        unique: true,
    },
    phoneNumber:
    {
        type: String,
        required: true,
    },
    sex:
    {
        type: String,
        required: true,
    },
    userStatus:
    {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);