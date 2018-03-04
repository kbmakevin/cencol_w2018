module.exports = (app) => {
    const thankyou = require('../controllers/thankyou.server.controller');

    app.get('/thankyou', thankyou.render);
}