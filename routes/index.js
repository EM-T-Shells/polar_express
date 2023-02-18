const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
const apiRouter = require('./api');

const app = express();

app.use('/notes', notesRouter);
app.use('/api', apiRouter);
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
