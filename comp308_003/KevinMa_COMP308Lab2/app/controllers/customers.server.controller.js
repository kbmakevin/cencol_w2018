const Customer = require('mongoose').model('Customer');

exports.create = (req, res, next) => {
    let customer = new Customer(req.body);
    customer.save(err => {
        // fail, passing error to the next middleware
        if (err) return next(err);
        // saves customer and outputs the customer object
        else res.json(customer);
    });
};