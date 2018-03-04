exports.render = (req, res, next) => {
    res.render('signup', {
        title: 'Sign Up'
    });
};

// exports.validatePassword = (req, res, next) => {
//     if (req.body.password === req.body.confirmPassword)
//         next();
//     else
//         console.log("one is not like the other");
// };