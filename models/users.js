const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    first_name: {type: String,required: true},
    last_name: {type: String,required: true},
    email: {type: String,required: true},
});

const User = mongoose.model("User",userSchema); // it must start with Uppercase because it is a class

module.exports = User