import * as express from 'express';
import * as logger from 'morgan';

let gameRouter = require('./routes/game');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = '3000';
app.set('port', port);

app.use('/api/games/', gameRouter);

app.use(function(err: any , req: express.Request , res: express.Response , next: express.NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
  console.log(`Rock paper scissors server listening on port ${port}`);
});

module.exports = app;
