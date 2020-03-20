import * as express from 'express';
import { GameOrchistrator } from '../game/gameOrchistrator';
import { InMemoryStore } from '../game/store/inMemoryStore/inMemoryStore';
import { Game } from '../game/game';
import serializeGame from '../serializer/gameSerializer';
import { Player } from 'game/models/player';
import JSONValidatorMiddleware from '../middleware/jsonValidator.middleware';

const router = express.Router();
const gameStore = new InMemoryStore();
const gameOrchistrator = new GameOrchistrator(gameStore);
const jv = new JSONValidatorMiddleware();

router.post('/', jv.requireUsername, function(req: express.Request, res: express.Response, next: express.NextFunction) {
  let player: Player =  {
    name: req.body.name
  } 
  
  gameOrchistrator.createGame(player)
    .then( (result: string) => {
      res.json({
        "gameID": result
      });
    })
    .catch( (err: Error) => {
      next(err);
    });
});

router.post('/:id/join', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  let player: Player =  {
    name: req.body.name
  } 
  let gameID = req.params.id;

  gameOrchistrator.joinGame(gameID, player)
    .then( () => {
      res.sendStatus(200);
    })
    .catch( (err: Error) => {
      next(err)
    });
});

router.post('/:id/move', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  let player: Player =  {
    name: req.body.name,
  }
  let move = req.body.move;
  let gameID = req.params.id;

  gameOrchistrator.registerMove(gameID, player, move)
    .then( () => {
      res.sendStatus(200);
    })
    .catch( (err: Error) => {
      next(err);
    });
});

router.get('/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  let gameID = req.params.id;

  gameOrchistrator.getGame(gameID)
    .then((game: Game) => {
      let result = serializeGame(game);
      res.json(result);
    })
    .catch((err: Error) => {
      next(err);
    });
});

module.exports = router;
