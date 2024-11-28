const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReceipeSchema = new Schema({
    title: String,
    ingredients: String,
    timing: Number,
    difficulty: Number
});

const Receipe = mongoose.model("Receipe", ReceipeSchema);

module.exports = Receipe;