// Load the 'users' controller
var users = require('../../app/controllers/users.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // handle a get request made to /users path
    // and list users when /users link is selected
    // app.get("/users",users.list); //go to http://localhost:3000/users to see the list
    app.get("/comp308studentsList",users.list); //go to http://localhost:3000/comp308studentsList to see the list

};

