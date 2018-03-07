/**
 * 
 * @file        viewcustomerfeedback.server.controller.js
 * @description this component is used to handle application logic for viewcustomerfeedback component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

exports.render = (req, res, next) => {
    res.render('viewcustomerfeedback', {
        title: "View Customer Feedback",
        customers: req.customerList,
    });
};