var mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/todo-api');
mongoose.connect('mongodb://heroku_9djcdx20:ndj9ugvuv98fc7fgbhjcu42ic5@ds233228.mlab.com:33228/heroku_9djcdx20')

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");