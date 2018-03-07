/**
 * 
 * @file        feedback.server.controller.js
 * @description this component is used to handle application logic for Feedback component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

const CustomerModel = require('mongoose').model('Customer');

exports.create = function (req, res, next) {

    CustomerModel.findOneByEmail(req.session.customer.email, (err, customer) => {
        // can't be error...if reached this part of code, the user must've been found.
        // if(err){ }
        req.session.comments = req.body.comments;

        customer.feedbacks.push({ "comments": req.session.comments });
        customer.save(err => {
            req.actionTitle = 'Submitting Feedback';

            if (err) {
                req.actionResult = 'Failed to submit the feedback';
                req.actionResultsContent = err;
                next()
            } else {
                req.actionResult = 'Submitted'
                next()
            }
        })

    });
}

exports.render = (req, res, next) => {
    if (req.session.customer) {
        res.render('feedback', {
            title: 'Student Feedback Form',
            fname: req.session.customer.firstName,
            lname: req.session.customer.lastName,
            email: req.session.customer.email,
            age: req.session.customer.age,
            program: req.session.customer.program,
        });
    } else {
        next();
    }
};