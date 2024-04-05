const mongoose = require("mongoose");

// Create user table schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    name : {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    dob:{
        type: Date,
        require: true
    },
    instanceType: {
        type : String,
        require: true,
        enum: ['guest','vip','plus','pro','elite']
    },
    isActive:{
        type: Boolean,
        require: true
    }
});

const users = mongoose.model('users',userSchema);

module.exports = users;