const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : {
        type :String,
        unique : true
    },
    phone : {
        type : Number,
        minlength: 8
    },
    password : String
});

const UsersModel = mongoose.model("users",UserSchema);
module.exports = UsersModel;