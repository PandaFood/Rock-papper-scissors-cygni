import * as express from 'express';
import { GameOrchistrator } from '../game/gameOrchistrator';
import { InMemoryStore } from '../game/store/inMemoryStore/inMemoryStore';
import { Game } from 'game/game';

const router = express.Router();
const gameStore = new InMemoryStore();
const gameOrchistrator = new GameOrchistrator(gameStore);

router.post('/', function(req: express.Request, res: express.Response) {

  let userName = req.body.name;

  gameOrchistrator.createGame(userName)
    .then( (result: string) => {
      res.json({
        "gameID": result
      });
    })
    .catch( (err: Error) => {
      console.log(err);
    });

});

router.post('/:id/join', function(req: express.Request, res: express.Response) {
  
  let userName = req.body.name;
  let gameID = req.params.id;

  gameOrchistrator.joinGame(gameID, userName)
  .then( () => {
    res.sendStatus(200);
  })
  .catch( (err: Error) => {
    console.log(err);
  });
});

router.post('/:id/move', function(req: express.Request, res: express.Response) {
  res.send("post");
});

router.get('/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {

  gameOrchistrator.getGame(req.params.id)
    .then((result: Game) => {
      console.log(result);
      res.json(result);
    })
    .catch((err: Error) => {
      next(err);
    });

});

module.exports = router;
