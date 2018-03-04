exports.render = (req, res, next) => {
    res.render('thankyou', {
        title: 'Thank You!',
        message: 'Your feedback has been received. We will process it shortly.'
    });
};