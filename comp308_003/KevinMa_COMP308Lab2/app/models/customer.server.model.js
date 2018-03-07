/**
 * 
 * @file        customer.server.model.js
 * @description this models the Customer document
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
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
},
    {
        versionKey: false
    });

// Virtual Attributes
CustomerSchema.virtual('fullName').get(function () { return this.firstName + " " + this.lastName; });

// Static Methods
CustomerSchema.statics.findOneByEmail = function (email, callback) {
    this.findOne({ email: new RegExp(email, 'i') }, callback);
}

// Instance Methods
CustomerSchema.methods.authenticate = function (password) {
    return this.password === password;
}

// Mongoose middleware can intercept process of the: init, validate, save, and remove instance methods

// // Pre-Middleware
// CustomerSchema.pre('save', function (next) {
//     // things to do before saving document e.g. complex validation here...
//     this.wasNew = this.isNew;
//     next();
// });

// // Post-Middleware
// CustomerSchema.post('save', function (next) {
//     // perfect for logging application logic
//     if (this.wasNew) {
//         console.log('A new user was created: ' + this.email);
//     } else {
//         console.log(this.email + ' has updated its details');
//     }
// });

// Configure Schema to include virtual attributes and getter methods when converting the MongoDB document to a JSON representation, and will allow the output of documents using res.json() to include the getter's behavior
CustomerSchema.set('toJSON', { virtuals: true, getters: true });

mongoose.model('Customer', CustomerSchema);