var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send("post");
});

router.post('/:id/join', function(req, res, next) {
  res.send("post + " + req.params.id);
});

router.post('/:id/move', function(req, res, next) {
  res.send("post");
});

router.get('/:id', function(req, res, next) {
  res.send("games");
});

module.exports = router;
