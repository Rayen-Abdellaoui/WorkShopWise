const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    phone : {
        type : Number,
        minlength: 8
    },
    password : String
});

const UsersModel = mongoose.model("users",UserSchema);
module.exports = UsersModel;