exports.render = (req, res, next) => {

    console.log('req.session.customer: ' + req.session.customer);

    res.render('thankyou', {
        title: 'Thank You!',
        message: 'Your feedback has been received. We will process it shortly.',
        customerFullName: req.session.customer.fullName,
        customerComments: req.session.comments
    });
};