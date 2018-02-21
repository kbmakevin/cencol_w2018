const mongoose = require('mongoose');

// create a model class by extending mongoose.Schema
let gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
    {
        collection: "games"
    });

module.exports = mongoose.model('games', gamesSchema);