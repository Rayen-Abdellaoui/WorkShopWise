const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    name : String,
    club_img : String
});

const ClubModel = mongoose.model("club",ClubSchema);
module.exports = ClubModel;