const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:3000' }));
const userRoutes = require('./api/user')

app.use('/user', userRoutes);

module.exports = app;
