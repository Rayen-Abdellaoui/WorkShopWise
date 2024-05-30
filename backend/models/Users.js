const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    phone : {
        type : Number,
        minlength: 8
    },
    password : String,
    role :{
        type : String,
        default : "User"
    }
});

const UsersModel = mongoose.model("users",UserSchema);
module.exports = UsersModel;