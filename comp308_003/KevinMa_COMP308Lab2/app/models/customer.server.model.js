const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

mongoose.model('Customer', CustomerSchema);