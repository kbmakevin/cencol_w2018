let mongoose = require('mongoose');

// survey object created from the Schema / model
let survey = require('../models/surveys.server.model');

// add survey
module.exports.DisplaySurveyDetails = function (req, res, next) {
    res.render('surveys/details', {
        title: "Add a new Survey",
        surveys: ''
    });
}

module.exports.CreateNewSurvey = function (req, res, next) {
    let newSurvey = survey({
        "surveyId": req.body.surveyId,
        "gameGenre": req.body.gameGenre,
        "daysPerYear": req.body.daysPerYear,
        "age": req.body.age
    });

    survey.create(newSurvey, (err, survey) => {
        if (err) {
            console.error(err);
            res.end(err);
        } else {
            res.redirect('/surveys');
        }
    });
}


// list surveys
module.exports.DisplaySurveysList = function (req, res, next) {
    survey.find((err, surveys) => {
        console.log(surveys);
        if (err) {
            return console.error(err);
        } else {
            res.render('surveys/index', {
                title: 'Surveys',
                surveys: surveys
            });
        }
    });
};

// update surveys
module.exports.DisplayEditPage = function (req, res, next) {
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    survey.findById(id, (err, surveys) => {
        if (err) {
            console.error(err);
            res.end(err);
        } else {
            // show the survey details view
            res.render('surveys/details', {
                title: 'Survey Details',
                surveys: surveys
            });
        }
    });
}

module.exports.UpdateSurvey = function (req, res, next) {
    let id = req.params.id;

    let updatedSurvey = survey({
        "_id": id,
        "gameGenre": req.body.gameGenre,
        "daysPerYear": req.body.daysPerYear,
        "age": req.body.age
    });

    survey.update({ _id: id }, updatedSurvey, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        } else {
            // refresh the Surveys List
            res.redirect('/surveys');
        }
    });
}

// delete a survey from the list
module.exports.DeleteSurvey = function (req, res, next) {
    let id = req.params.id;

    survey.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        } else {
            // refresh the surveys list
            res.redirect('/surveys');
        }
    });
}
