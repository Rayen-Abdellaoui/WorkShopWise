const mongoose = require('mongoose');

const WorkShopsSchema = new mongoose.Schema({
    club : String,
    title : String,
    date : String,
    level : Number,
    lang : String,
    duration : Number
});

const WorkShopsModel = mongoose.model("workshops",WorkShopsSchema);
module.exports = WorkShopsModel;