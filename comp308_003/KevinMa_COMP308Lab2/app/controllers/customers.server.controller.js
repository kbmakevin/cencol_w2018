/**
 * 
 * @file        customers.server.controller.js
 * @description this component is used to handle application logic for Customer Model
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

const CustomerModel = require('mongoose').model('Customer');

exports.create = (req, res, next) => {
    let customer = new CustomerModel(req.body);

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
    CustomerModel.find(
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
        });
};

// finds a customer their email address
exports.findCustomerByEmail = (req, res, next) => {

    let email = req.body.username

    req.session.inputPassword = req.body.password

    CustomerModel.findOneByEmail(email, (err, customer) => {
        if (err) {
            req.session.customer = null;
            next()
        }
        // save the found customer in session state because everything going forward (prior to logging out) will be using this customer document
        req.session.customer = customer;
        next();
    });
};

exports.authenticateCustomer = function (req, res, next) {
    if (req.session.customer) {
        req.email = req.session.customer.email
        req.password = req.session.customer.password

        req.actionTitle = 'Login';
        req.actionResultsContent = 'Incorrect credentials entered.\n\nPlease try again!';

        if (req.session.customer.authenticate(req.session.inputPassword)) {
            console.log('authenticated');
            req.actionResult = 'Authenticated'
            next()
        }
        else {
            req.actionResult = 'Failed to Authenticate'
            console.log('failed to authenticate!');
            next()
        }
    } else {
        req.actionTitle = 'Login';
        req.actionResult = 'Cannot find user'
        req.actionResultsContent = 'You have entered a username not currently registered with our application.\n\nPlease try again!';

        next()
    }
};

// NOT CURRENTLY USED - will be used in later iterations ------------------------------
exports.update = (req, res, next) => {
    CustomerModel.findOneAndUpdate(
        {
            email: req.session.customer.email,
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
    req.session.customer.remove(err => {
        if (err) return next(err);
        res.json(req.session.customer);
    })
};