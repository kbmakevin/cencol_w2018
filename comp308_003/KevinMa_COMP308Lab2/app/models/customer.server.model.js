const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        // secondary index created because application will use alot of queries involving customer's first and last name; optimize query execution
        index: true
    },
    lastName: {
        type: String,
        trim: true,
        index: true
    },
    email: {
        type: String,
        trim: true,
        // tells MongoDB to create unique index for the email field of the customers collection
        unique: true
    },
    password: {
        type: String,
        trim: true,

    },
    // two custom fields for assignment 2
    age: {
        type: Number,
        // min: 0
    },
    program: {
        type: String,
        trim: true,
        uppercase: true
    },
    registered: {
        type: Date,
        default: Date.now
    }
},
    {
        versionKey: false
    });

// Virtual Attributes
CustomerSchema.virtual('fullName').get(() => { return this.firstName + this.lastName; });

// Static Methods
CustomerSchema.statics.findOneByEmail = function (email, callback) {
    this.findOne({ email: new RegExp(email, 'i') }, callback);
}

// Instance Methods
CustomerSchema.methods.authenticate = function (password) {
    return this.password === password;
}

// Configure Schema to include virtual attributes and getter methods when converting the MongoDB document to a JSON representation, and will allow the output of documents using res.json() to include the getter's behavior
CustomerSchema.set('toJSON', { virtuals: true, getters: true });

mongoose.model('Customer', CustomerSchema);