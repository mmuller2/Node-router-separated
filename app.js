import express from 'express';
import * as router from './router/index.js';
import morgan from 'morgan';
// import  from './router/index.js';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use('/api/v1/todos', router.tasks);
// app.use('/api/v1/jobs', router.jobs);

app.use(express.json()); //next()
app.listen(PORT, () => console.log('listening'));

// import fetch from 'node-fetch';
// fetch('https://swapi.dev/api/people/1')
//   .then((response) => response.json())
//   .then((data) => console.log('data', data))
//   .catch(function (err) {
//     console.log('Unable to fetch -', err);
//   });
