import express from 'express';
import { ChickensController } from './controllers/chickens.controller.js';
import { logger } from './utils/logger.js';
import { chickenRouter } from './routes/chickens.routes.js';

const app = express();
const port = 3000;

app.use(express.json()); // this is a middleware that parses the body of the request and makes it available in req.body
app.use('/api/v1/chickens', chickenRouter); // this is a middleware that routes the request to the appropriate controller based on the URL and the HTTP method




// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});