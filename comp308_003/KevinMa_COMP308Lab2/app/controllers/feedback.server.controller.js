const Feedback = require('mongoose').model('Feedback');
const Customer = require('mongoose').model('Customer');

exports.create = (req, res, next) => {
    // let feedback = new Feedback(req.body);
    let feedback = Feedback({
        comments: req.body.comments,
        // author: req.customer
    });

    console.log(req.session.customer.fullName);

    // instead of passing req.body, can we pass in diff args for each field?
    // comments from feedback.ejs / req.body.comments
    // author we take from req.session.customer or req.session.inputEmail

    req.session.comments = req.body.comments;

    console.log(feedback);

    next()

    // feedback.save(function (err) {
    //     req.actionTitle = 'Submitting Feedback';

    //     // fail, passing error to the next middleware
    //     if (err) {
    //         req.actionResult = 'Failed to submit feedback for user: ' + req.session.customer.fullName;
    //         req.actionResultsContent = err;
    //         next()
    //     }
    //     else {
    //         req.actionResult = 'Success';
    //         // req.actionResult = 'The user was successfully created!';
    //         // req.actionResultsContent = customer;

    //         // display thank you page if successfully created!
    //         next()
    //     }
    // });



    // console.log('found customer email: ' + req.email);
    // console.log('found customer password: ' + req.password);

    // console.log('user entered password: ' + req.session.inputPassword);
}

exports.render = (req, res, next) => {
    // save the user name from previous page so we can use it on this page
    // req.session.username = req.body.username;

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