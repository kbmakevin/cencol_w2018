/**
 * This uses CommonJS module pattern to export a single module function
 * This function takes an express obj as arg
 * Then it requires the index controller and uses its render() method as a middleware to different VERB requests made to specified paths
 * @param {Express} app 
 */
module.exports = (app) => {
    const index = require('../controllers/index.server.controller');
    const signup = require('../controllers/signup.server.controller');
    const feedback = require('../controllers/feedback.server.controller');
    const thankyou = require('../controllers/thankyou.server.controller');
    const customers = require('../controllers/customers.server.controller');

    /**
     * app.route(path).VERB([callback...], callback)
     * allows us to specify multiple HTTP verbs for one path
     */
    // NOTE: we do app.post here because we are submitting the form via POST request to /, not a get of feedback!
    app.route('/')
        .get(index.render)
        .post(feedback.render);

    app.get('/thankyou', thankyou.render);

    app.route('/signup')
        .get(signup.render)
        .post(customers.create);
}