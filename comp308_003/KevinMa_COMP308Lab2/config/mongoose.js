const config = require("./config");
const mongoose = require("mongoose");

module.exports = () => {
    let db = mongoose.connect(config.db);

    // register the Customer model
    require('../app/models/customer.server.model');
    // register the Feedback model
    // require('../app/models/feedback.server.model');

    return db;
}