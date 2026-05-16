import express from 'express';
import { ChickensController } from './controllers/chickens.controller.js';
const app = express();
const port = 3000;

app.use(express.json()); // this is a middleware that parses the body of the request and makes it available in req.body


app.get('/api/v1/chickens', ChickensController.getChickens);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});