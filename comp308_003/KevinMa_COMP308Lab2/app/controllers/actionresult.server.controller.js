/**
 * 
 * @file        actionresult.server.controller.js
 * @description this component is used to dispaly the results of certain actions:
 *              -authentication
 *              -sign up
 *              -submission of feedback
 *              -etc.
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */
exports.render = (req, res, next) => {
    if (req.actionResult == 'Authenticated') {
        res.redirect('/feedback');
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