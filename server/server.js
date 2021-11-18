

const express = require('express'); // Express web server framework
const axios = require('axios');
const getAuthLib = require('./config/spotify-config');
const spotifyRouter = require('./api-routes/routes')
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/spotify-wrapper',spotifyRouter)
console.log('Listening on 8888');
app.listen(8888);