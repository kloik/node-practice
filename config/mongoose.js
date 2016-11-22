var config = require("./config.js"),
    mongoose = require("mongoose");

module.exports = function () {
    return mongoose.connect(config.db);
};