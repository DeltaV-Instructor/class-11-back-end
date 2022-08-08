'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// USE
// implement express
const app = express();

// middleware its like our bouncer....
app.use(cors());

//npm install mongoose this will bring in mongoose.
const mongoose = require('mongoose');


//we shoulds create models folder and a file for our model and schema for cats




// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});

//star do?
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
