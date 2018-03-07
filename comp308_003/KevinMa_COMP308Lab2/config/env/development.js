/**
 * 
 * @file        development.js
 * @description stores the environment configurations for the development environment
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

module.exports = {
    // development configuration options
    /**
     * express-session module uses a cookie-stored, signed identifier to identify the current user
     * 
     * session identifier uses a secret string.
     * 
     * for security reasons, this cookie is recommended to be diff per env, hence we put it in our
     * env conf files.
     */
    sessionSecret: 'developmentSessionSecret',

    /**
     * MongoDB connection URI - string URL tells MongoDB drivers how connect to database instance
     * 
     * usual format:
     * mongodb://username:password@hostname:port/database
     * 
     * but since local instance, can omit authorization
     */
    // for offline use because windows cannot resolve localhost when wifi interface is off
    db: 'mongodb://127.0.0.1/comp308-w2018'
    // db: 'mongodb://localhost/comp308-w2018'
};