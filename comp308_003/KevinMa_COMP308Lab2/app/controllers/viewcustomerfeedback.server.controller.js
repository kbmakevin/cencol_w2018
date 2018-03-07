/**
 * 
 * @file        viewcustomerfeedback.server.controller.js
 * @description this component is used to handle application logic for viewcustomerfeedback component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

exports.render = (req, res, next) => {

    // GET for viewcustomerfeedback shows no list yet
    let customerArr = [];

    // POST - shows feedbacks depending on user input
    if (req.customerList) {
        customerArr = req.customerList;
    }

    res.render('viewcustomerfeedback', {
        title: "View Customer Feedback",
        customers: customerArr,
        // customers: req.customerList,
    });
};