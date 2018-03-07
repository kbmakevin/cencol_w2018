/**
 * This uses CommonJS module pattern to export a single module function
 * This function takes an express obj as arg
 * Then it requires the index controller and uses its render() method as a middleware to different VERB requests made to specified paths
 * @param {Express} app 
 */
module.exports = (app) => {
    const customers = require('../controllers/customers.server.controller');
    const index = require('../controllers/index.server.controller');
    // const feedback = require('../controllers/feedback.server.controller');
    // const thankyou = require('../controllers/thankyou.server.controller');
    const actionresult = require('../controllers/actionresult.server.controller');

    /**
     * app.route(path).VERB([callback...], callback)
     * allows us to specify multiple HTTP verbs for one path
     */
    // NOTE: we do app.post here because we are submitting the form via POST request to /, not a get of feedback!
    app.route('/')
        .get(index.render)
        .post(
            // 1. find customer in data store
            // need redirect with status code of 307 - temporary redirect, because default is 302 - found, changes POST request to GET
            // (req, res) => {
            //     // req.password = req.body.password;
            //     // req.inputemail = req.body.username;
            //     // req.inputpassword = req.body.password;
            //     req.session.inputEmail = req.body.username;
            //     req.session.inputPassword = req.body.password;
            //     res.redirect('/' + req.body.username);
            //     // res.redirect(307, '/' + req.body.username);
            // },
            // (req,res)
            // customers.customerByEmail
            // 2. try to authenticate user
            // 3. display feedback page and populate all fields but comments
            // feedback.render

            customers.findCustomerByEmail,
            customers.authenticateCustomer,
            actionresult.render,
        // feedback.render

    );

    // app.route('/:email')
    //     .get(
    //         // customers.read,
    //         // (req, res, next) => {
    //         //     // console.log('inindex route')
    //         //     // console.log('found customer email: ' + req.email);
    //         //     // console.log('found customer password: ' + req.password);

    //         //     // console.log('user entered password: ' + req.session.inputPassword);
    //         //     // next()
    //         // },
    //         customers.authenticateCustomer,
    //         actionresult.render,

    //         // (req, res, next) => {
    //         //     console.log('in this method')
    //         //     console.log('req.actionResult is: ' + req.actionResult)
    //         //     actionresult.render

    //         //     // if (req.actionResult == 'Success') {
    //         //     //     console.log('going to render feedback now')
    //         //     //     next()
    //         //     // }
    //         //     // else {
    //         //     //     console.log('going to render actionresult now')
    //         //     //     actionresult.render
    //         //     // }
    //         // },
    //         feedback.render
    //     )
    //     .post(
    //         feedback.create,
    //         // (req, res, next) => {
    //         //     if (req.actionResult == 'Success') {
    //         //         next()
    //         //     }
    //         //     actionresult.render
    //         // },
    //         thankyou.render
    //     );

    // // define a middleware to be executed before any other middleware that uses the parameter
    // app.param('email', customers.customerByEmail);
}