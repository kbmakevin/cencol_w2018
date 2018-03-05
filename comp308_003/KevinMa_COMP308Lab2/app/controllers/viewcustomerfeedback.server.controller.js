exports.render = (req, res, next) => {
    res.render('viewcustomerfeedback', {
        title: "View Customer Feedback",
        customers: req.customerList,
    });
};