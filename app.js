import express from 'express';
import path from 'node:path';

import indexRouter from './src/routes/indexRouter.js';
import newMessageRouter from './src/routes/newMessageRouter.js';

const app = express();
const PORT = 3000;

// Set up to render in ejs
app.set('views', path.join(import.meta.dirname, 'src/views'));
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

app.use('/new', newMessageRouter);
app.use('/', indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening on ${PORT}`);
});
