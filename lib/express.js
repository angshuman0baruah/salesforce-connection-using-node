var express = require('express'),
    bodyParser = require('body-parser'),
	user = require('./controller/controller.salesforce');
	
module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({extended: false }));
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        app.route('/').get(user.salesforce);
        next();
    })
    return app;
}
