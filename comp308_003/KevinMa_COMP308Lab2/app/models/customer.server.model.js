/**
 * 
 * @file        customer.server.model.js
 * @description this models the Customer document
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */

let mongoose = require('mongoose');
// 2018.03.07 - 19:02:29 - simplify customer model
let customerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        // secondary index created because application will use alot of queries involving customer's first and last name; optimize query execution
        index: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        // predefined validator
        match: /.+\@.+\..+/,
        // tells MongoDB to create unique index for the email field of the customers collection
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        // custom validator - array of validation function, err msg to return to callback
        validate: [
            (password) => password.length >= 5,
            'Password should be at least 5 characters long!'
        ],
    },
    // two custom fields for assignment 2
    age: {
        type: Number,
        required: true,
        // min: 0
    },
    program: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    registered: {
        type: Date,
        default: Date.now
    },

    feedbacks: [
        {
            comments: {
                type: String,
                trim: true,
            },
            created: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

// Virtual Attributes
customerSchema.virtual('fullName').get(function () { return this.firstName + " " + this.lastName; });

// Static Methods
customerSchema.statics.findOneByEmail = function (email, callback) {
    this.findOne({ email: new RegExp(email, 'i') }, callback);
}

// Instance Methods
customerSchema.methods.authenticate = function (password) {
    return this.password === password;
}

// Configure Schema to include virtual attributes and getter methods when converting the MongoDB document to a JSON representation, and will allow the output of documents using res.json() to include the getter's behavior
customerSchema.set('toJSON', { virtuals: true, getters: true });

// 2018.03.07 - 19:04:57 - simplifying customer model
module.exports = mongoose.model('customers', customerSchema);