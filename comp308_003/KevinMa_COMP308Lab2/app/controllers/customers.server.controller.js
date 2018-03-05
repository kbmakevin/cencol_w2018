const Customer = require('mongoose').model('Customer');

exports.create = (req, res, next) => {
    let customer = new Customer(req.body);

    customer.save(function (err) {
        req.actionTitle = 'Customer Sign Up';

        // fail, passing error to the next middleware
        if (err) {
            req.actionResult = 'Failed to create the customer account.';
            req.actionResultsContent = err;
            next()
        }
        else {
            req.actionResult = 'The user was successfully created!';
            req.actionResultsContent = customer;
            next()
        }
    });
};

exports.list = (req, res, next) => {
    // empty MongoDB query object returns all documents in the collection
    Customer.find(
        // Query object - MongoDB Query Object
        {},
        // [Fields] - optional, can specify fields to return separated by a space, can exclude specific fields, prefix with '-'
        // 'firstName lastName email password age program',
        // [Options] - optional options object
        // {
        // skip the first 2 matching documents
        // skip: 2,
        // return subset of up to 3 documents
        // limit: 3
        // },
        // [Callback] - callback function, optional
        (err, customers) => {
            if (err) return next(err);
            req.customerList = customers;
            next();
            // res.json(customers);
        });
};

// 'read' controller method to display a customer
exports.read = (req, res, next) => {
    // Use the 'response' object to send a JSON response
    res.json(req.customer);
    next();
};

// finds a customer their email address
exports.customerByEmail = (req, res, next, email) => {

    // console.log('customersbyemail!')
    // console.log('email: ' + req.customer);
    // console.log('password: ' + req.password);

    Customer.findOneByEmail(email, (err, customer) => {
        if (err) return next(err);
        req.customer = customer;
        next();
    });
};

// exports.authenticateCustomer = function (req, res, next) {
//     console.log('authenticatecustomer')
//     console.log('email: ' + req.customer);
//     console.log('password: ' + req.password);

//     if (req.customer.authenticate(req.password))
//         console.log('authenticated');
//     else
//         console.log('unauthorized!');
// };

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