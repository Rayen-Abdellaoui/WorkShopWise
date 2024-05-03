const mongoose = require('mongoose');

const WorkShopsSchema = new mongoose.Schema({
    club : String,
    title : String,
    date : String,
    level : Number,
    lang : String,
    duration : Number,
    participants : { type: Number, default: 0 },
    image : { type: String, default: "default_workshop.jpg" },
    trainers : Array
});

const WorkShopsModel = mongoose.model("workshops",WorkShopsSchema);
module.exports = WorkShopsModel;