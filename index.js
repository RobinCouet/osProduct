const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const osRoutes = require('./routes/os');
const productRoutes = require("./routes/products");
const serverRoute = require("./routes/server");
const userRoutes = require("./routes/users");
const receipeRoute = require("./routes/receipe");

// Connexion à la base de données
// l'url correspond a votre mongoDB en local et le nom de votre base de données se trouve après le /
mongoose.connect(`${process.env.MONGO_URL}/sieli`)
    .then(() => {
        console.log("Connexion OK");
    }).catch((error) => {
        console.log(error);
    })

app.use(cors({
    origin: process.env.FRONT_URL
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/os", osRoutes);
app.use("/products", productRoutes);
app.use("/server", serverRoute);
app.use("/users", userRoutes);
app.use("/receipe", receipeRoute);

app.listen(3001, () => {
    console.log("L'API est lancée sur l'url http://localhost:3001");
})