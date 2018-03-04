module.exports = (app) => {
    const signup = require('../controllers/signup.server.controller');
    const customers = require('../controllers/customers.server.controller');

    app.route('/signup')
        .get(signup.render)
        .post(
            // signup.validatePassword,
            customers.create
        );
}