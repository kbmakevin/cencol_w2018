exports.render = (req, res, next) => {
    if (req.actionResult == 'Authenticated') {
        // console.log('actionresult is success!')
        res.redirect('/feedback');
        // next()
    } else if (req.actionResult == 'Submitted') {
        res.redirect('/thankyou');
    } else {
        res.render('actionresult', {
            title: req.actionTitle,
            result: req.actionResult,
            content: req.actionResultsContent
        });
    }
};