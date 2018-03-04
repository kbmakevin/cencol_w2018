exports.render = (req, res, next) => {
    // save the user name from previous page so we can use it on this page
    req.session.username = req.body.username;

    res.render('feedback', {
        title: 'Student Feedback Form',
        username: req.session.username
    });
};