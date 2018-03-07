exports.render = (req, res, next) => {
    if (req.actionResult == 'Authenticated') {
        console.log('actionresult is success!')
        res.redirect('/feedback');
        // next()
    } else {
        res.render('actionresult', {
            title: req.actionTitle,
            result: req.actionResult,
            content: req.actionResultsContent
        });
    }
};