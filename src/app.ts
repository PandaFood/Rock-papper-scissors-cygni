import * as express from 'express';
import * as logger from 'morgan';
import ErrorHandlerMiddleware from './middleware/errorHandler.middleware'

let gameRouter = require('./routes/gameRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = '3000';
app.set('port', port);

app.use('/api/games/', gameRouter);


app.use(ErrorHandlerMiddleware);


app.listen(port, function () {
  console.log(`Rock paper scissors server listening on port ${port}`);
});

module.exports = app;
