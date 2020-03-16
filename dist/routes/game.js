"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.post('/', function (req, res) {
    res.send("post");
});
router.post('/:id/join', function (req, res) {
    res.send("post + " + req.params.id);
});
router.post('/:id/move', function (req, res) {
    res.send("post");
});
router.get('/:id', function (req, res) {
    res.send("games");
});
module.exports = router;
