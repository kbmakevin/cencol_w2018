let mongoose = require('mongoose');

// create a model class
let surveysSchema = mongoose.Schema({
    surveyId: String,
    gameGenre: String,
    daysPerYear: Number,
    age: String
},
    {
        collection: "surveys"
    });

module.exports = mongoose.model('surveys', surveysSchema);