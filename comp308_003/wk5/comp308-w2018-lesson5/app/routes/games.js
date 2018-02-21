let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// game object created from the Schema / model
let game = require('../models/games');


// GET games List
router.get('/', (req, res, next) => {
    // find all games in the games collection
    game.find((err, games) => {
        if (err) {
            return console.error(err);
        }
        res.render('games/index', {
            title: 'Games',
            games: games
        });
    });
});

module.exports = router;