const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    // two custom fields for assignment 2
    age: Number,
    program: String
},
    {
        versionKey: false
    });

mongoose.model('Customer', CustomerSchema);