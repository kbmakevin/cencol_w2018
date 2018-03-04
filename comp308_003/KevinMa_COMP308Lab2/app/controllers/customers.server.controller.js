const Customer = require('mongoose').model('Customer');

exports.create = (req, res, next) => {
    let customer = new Customer(req.body);
    customer.save(err => {
        // fail, passing error to the next middleware
        if (err) return next(err);
        // saves customer and outputs the customer object
        res.json(customer);
    });
};

exports.list = (req, res, next) => {
    // empty MongoDB query object returns all documents in the collection
    Customer.find(
        // Query object - MongoDB Query Object
        {},
        // [Fields] - optional, can specify fields to return separated by a space, can exclude specific fields, prefix with '-'
        '-_id firstName lastName',
        // [Options] - optional options object
        {
            // skip the first 2 matching documents
            skip: 2,
            // return subset of up to 3 documents
            limit: 3
        },
        // [Callback] - callback function, optional
        (err, customers) => {
            if (err) return next(err);
            res.json(customers);
        });
};