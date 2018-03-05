exports.render = (req, res, next) => {
    res.render('actionresult', {
        title: req.actionTitle,
        result: req.actionResult,
        content: req.actionResultsContent
    });
};