const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeedbackSchema = new Schema({
    comments: {
        type: String,
        required: true,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
    // author: {
    //     // Mongoose DBRef simulates joins of RDBMS joins
    //     // 1. using the ObjectID schema type and the ref property  to create DBRef
    //     // 2. later using populate to gather the data when retrieving the document
    //     type: Schema.Types.ObjectId,
    //     ref: 'Customer',
    // }
});

// // Pre-Middleware
// FeedbackSchema.pre('save', (next) => {
//     // things to do before saving document e.g. complex validation here...

//     // find customer, and add it as this feedback's author before saving
// });

// define the Feedback model
module.exports = mongoose.model('Feedback', FeedbackSchema);