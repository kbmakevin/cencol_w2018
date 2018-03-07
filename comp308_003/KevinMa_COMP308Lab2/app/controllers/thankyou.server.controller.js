/**
 * 
 * @file        thankyou.server.controller.js
 * @description this component is used to handle application logic for thankyou component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

exports.render = (req, res, next) => {

    console.log('req.session.customer: ' + req.session.customer);

    res.render('thankyou', {
        title: 'Thank You!',
        message: 'Your feedback has been received. We will process it shortly.',
        customerFullName: req.session.customer.fullName,
        customerComments: req.session.comments
    });
};