const Receipe = require('../models/Receipe');

const addReceipe = async (req, res) => {
    // const receipe = new Receipe;
    // receipe.title = req.body.title;
    // receipe.ingredients = req.body.ingredients;
    // receipe.timing = req.body.timing;
    // receipe.difficulty = req.body.difficulty;

    // await receipe.save();

    // const receipe = new Receipe(req.body);
    // await receipe.save();

    const receipe = await Receipe.create(req.body);

    res.json(receipe);
}

const getAll = async (req, res) => {
    // Je recup uniquement les recettes qui ont une difficulté a 5
    // const receipes = await Receipe.find({ difficulty: 5 });
    const receipes = await Receipe.find();

    res.json(receipes);
}

module.exports = {
    addReceipe,
    getAll
}