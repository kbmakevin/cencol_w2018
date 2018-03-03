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
    db: 'mongodb://localhost/mean-book'
};