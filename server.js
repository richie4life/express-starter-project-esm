import express from 'express';
//import { ChickensController } from './controllers/chickens.controller.js';
import { chickenRouter } from './routes/chickens.routes.js';
import { logger } from './utils/logger.js';
import { chickenAgeMiddleware } from './middleware/chickenAge.middleware.js';
//import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';

const app = express();
const port = 3000;



app.use(express.json()); // this is a middleware that parses the body of the request and makes it available in req.body
//TODO: make more precise on URL 
app.use(chickenAgeMiddleware); // this is a middleware that checks the age of the chicken and adds an ageDescription property to the request body based on the age of the chicken
app.use('/api/v1/chickens', chickenRouter); // this is a middleware that routes the request to the appropriate controller based on the URL and the HTTP method

// Error handler middleware should be the last middleware added to the app, so that it can catch any errors that occur in the previous middlewares and controllers
//app.use(errorHandlerMiddleware); // this is a middleware that handles errors that occur in the application and sends a response with a status code of 500 and a message indicating that an internal error occurred




// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});