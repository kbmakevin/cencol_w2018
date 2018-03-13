// Load the 'Task' Mongoose model
var Task = require('mongoose').model('Task');

// Create a new 'createTask' controller method
exports.createTask = function (req, res, next) {
    // Create a new instance of the 'Task' Mongoose model
    var task = new Task(req.body);
    // Use the 'Task' instance's 'save' method to save a new task document
    task.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(task);

        }
    });
};


// Create a new 'readTasks' controller method
exports.readTasks = function (req, res, next) {
    console.log('in readTasks')
    // Use the 'Task' static 'find' method to retrieve the list of items
    Task.find({}, function (err, tasks) {
        console.log(tasks)
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in readTask method')
            return next(err);
        } else {
            //
            res.render('tasks', {
                title: 'Tasks',
                tasks: tasks
            });
        }
    });
};
