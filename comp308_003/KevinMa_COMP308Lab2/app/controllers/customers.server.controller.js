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
        '_id firstName lastName email password age program',
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

// 'read' controller method to display a customer
exports.read = (req, res) => {
    // Use the 'response' object to send a JSON response
    res.json(req.customer);
};

// finds a customer their email address
exports.customerByEmail = (req, res, next, email) => {
    Customer.findOneByEmail(email, (err, customer) => {
        if (err) return next(err);
        req.customer = customer;
        next();
    });
};

exports.update = (req, res, next) => {
    Customer.findOneAndUpdate(
        {
            email: req.customer.email,
        },
        req.body,
        // {
        //     firstName: "Kevin",
        //     lastName: "Ma"
        // },
        {
            new: true
        },
        (err, customer) => {
            res.json(customer);
            if (err) return next(err);
            res.json(customer);
        });
};

exports.delete = (req, res, next) => {
    req.customer.remove(err => {
        if (err) return next(err);
        res.json(req.customer);
    })
};