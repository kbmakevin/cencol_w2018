//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method as a middleware to GET requests made to the root path.
module.exports = (app) => {
    let index = require('../controllers/index.server.controller');
    let feedback = require('../controllers/feedback.server.controller');
    let thankyou = require('../controllers/thankyou.server.controller');

    app.get('/', index.render);
    // NOTE: we do app.post here because we are submitting the form via POST request to /, not a get of feedback!
    // app.get('/feedback', feedback.render);
    app.post('/', feedback.render);
    app.get('/thankyou', thankyou.render);
}