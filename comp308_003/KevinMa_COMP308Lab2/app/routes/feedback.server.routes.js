module.exports = (app) => {
    const feedback = require('../controllers/feedback.server.controller');
    // const thankyou = require('../controllers/thankyou.server.controller');
    const actionresult = require('../controllers/actionresult.server.controller');
    // const feedbacks = require('../controllers/feedback.server.controller');
    // const customers = require('../controllers/customers.server.controller');

    app.route('/feedback')
        .get(
            feedback.render
        )
        .post(
            feedback.create,
            actionresult.render
            // (req, res, next) => {
            //     if (req.actionResult == 'Success') {
            //         next()
            //     }
            //     actionresult.render
            // },
            // thankyou.render
        );

};