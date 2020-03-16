import * as express from 'express';
const router = express.Router();

router.post('/', function(req: express.Request, res: express.Response) {
  res.send("post");
});

router.post('/:id/join', function(req: express.Request, res: express.Response) {
  res.send("post + " + req.params.id);
});

router.post('/:id/move', function(req: express.Request, res: express.Response) {
  res.send("post");
});

router.get('/:id', function(req: express.Request, res: express.Response) {
  res.send("games");
});

module.exports = router;
