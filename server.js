const express = require('express');
const app = express();
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const startDb = require('./db/db');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const cors = require('cors');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const sslRedirect = require('heroku-ssl-redirect');
// const { CreateElection, Vote } = require('./routes');

startDb();

app.set('port', process.env.PORT || 2000);
app.set('appName', 'AudioSwipe');

app.use(cookieParser());
app.use(logger('dev'));
app.use(errorHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({ extended: true })));
app.use(cors());
app.use(sslRedirect.default());

app.use(history({
    rewrites: [
        {
            from: /^\/api\/.*$/,
            to: function(context) {
                return context.parsedUrl.path;
            }
        }
    ]
}));

app.get('*', (req, res) => {
    res.status('200').send('Welcome to AudioSwipe!');
    console.log('AudioSwipe!');
});

// Routes
// app.use(CreateElection);
// app.use(Vote);

// Server
const server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('Server listening on port:', app.get('port'));
});

// Catch uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
});