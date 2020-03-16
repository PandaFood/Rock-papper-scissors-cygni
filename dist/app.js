"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var gameRouter = require('./routes/game');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = '3000';
app.set('port', port);
app.use('/api/games/', gameRouter);
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
app.listen(port, function () {
    console.log("Rock paper scissors server listening on port " + port);
});
module.exports = app;
