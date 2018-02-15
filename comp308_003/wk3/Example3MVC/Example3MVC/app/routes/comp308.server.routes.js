// Load the 'index' controller
const myCourseName = require('../controllers/comp308.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Mount the 'index' controller's 'render' method
    app.get('/comp308', myCourseName.display);
};

