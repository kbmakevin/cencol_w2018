let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// survey object created from the Schema / model
let survey = require('../models/surveys.server.model');

let surveysController = require("../controllers/surveys.server.controller");

/* GET surveys List page. READ */
router.get('/', (req, res, next) => {
    // find all surveys in the surveys collection
    surveysController.DisplaySurveysList(req, res, next);
});

// GET the Survey Details page in order to add a new Survey
router.get('/add', (req, res, next) => {
    surveysController.DisplaySurveyDetails(req, res, next);
});

// POST process the Survey Details page and create a new Survey - CREATE
router.post('/add', (req, res, next) => {
    surveysController.CreateNewSurvey(req, res, next);
});

// GET the Survey Details page in order to Edit a Survey - UPDATE
router.get('/:id', (req, res, next) => {
    surveysController.DisplayEditPage(req, res, next);
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
    surveysController.UpdateSurvey(req, res, next);
});

// GET - process the delete survey id
router.get('/delete/:id', (req, res, next) => {
    surveysController.DeleteSurvey(req, res, next);
});


module.exports = router;
