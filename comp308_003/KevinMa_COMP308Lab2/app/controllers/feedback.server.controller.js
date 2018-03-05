exports.render = (req, res, next) => {
    // save the user name from previous page so we can use it on this page
    // req.session.username = req.body.username;

    res.render('feedback', {
        title: 'Student Feedback Form',
        fname: req.customer.firstName,
        lname: req.customer.lastName,
        email: req.customer.email,
        age: req.customer.age,
        program: req.customer.program,
    });
};