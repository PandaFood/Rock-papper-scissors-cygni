import * as express from 'express';
import ErrorHandlerMiddleware from './middleware/errorHandler.middleware'

const gameRouter = require('./routes/gameRouter');
const app = express();

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
