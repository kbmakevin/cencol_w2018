module.exports = (app) => {
    const signup = require('../controllers/signup.server.controller');
    const customers = require('../controllers/customers.server.controller');
    const actionresult = require('../controllers/actionresult.server.controller');

    app.route('/signup')
        .get(signup.render)
        .post(
            // signup.validatePassword,
            customers.create,
            actionresult.render
            // alert('User was successfully created!')
            // (req, res) => res.redirect('/')
        );
}