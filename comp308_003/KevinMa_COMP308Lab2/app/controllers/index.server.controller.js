/**
 * 
 * @file        index.server.controller.js
 * @description this component is used to handle application logic for Login component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

exports.render = (req, res, next) => {
    res.render('index', {
        title: 'Login'
    });
};