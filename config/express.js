var config = require("./config"),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    session = require("express-session"),
    cookieParser = require("cookie-parser"),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === "production") {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(cookieParser());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    app.set("views", "./app/views");

    // This is the file which does the job of routing home to template
    require("../app/routes/index.server.routes.js")(app);

    // This will serve static files
    app.use(express.static("./public"));
    return app;
};
