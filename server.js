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
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const Grid = require('gridfs-stream');
const sslRedirect = require('heroku-ssl-redirect');
const { 
    ArtistDeleteSong,
    ArtistUpdateAvatar,
    ArtistUploadSong,
    ArtistUploadSongMetadata,
    FanUpdateAvatar,
    FetchGenre,
    ForgotLogin,
    GetAudio,
    GetArtistAudio,
    GetFanAudio,
    GetPhoto,
    LoginArtist, 
    LoginFan,
    SaveAlbumCover,
    SaveArtistSong,
    SaveNewArtist,
    SaveNewFan,
    SwipeSong,
    TestRoute,
    UpdateArtist,
} = require('./routes');

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

// Routes
app.use(ArtistDeleteSong);
app.use(ArtistUpdateAvatar);
app.use(ArtistUploadSong);
app.use(ArtistUploadSongMetadata);
app.use(FanUpdateAvatar);
app.use(FetchGenre);
app.use(ForgotLogin);
app.use(GetAudio);
app.use(GetArtistAudio);
app.use(GetFanAudio);
app.use(GetPhoto);
app.use(LoginArtist);
app.use(LoginFan);
app.use(SaveAlbumCover);
app.use(SaveArtistSong);
app.use(SaveNewArtist);
app.use(SaveNewFan);
app.use(SwipeSong);
app.use(TestRoute);
app.use(UpdateArtist);

app.use(serveStatic(path.join(__dirname, 'build')));

// Middleware
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Server
const server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('Server listening on port:', app.get('port'));
});

// Catch uncaught exceptions
/* process.on('uncaughtException', err => {
    // console.log(`Error: ${err.message}`);
    console.log(err);
}); */