var dotenv = require('dotenv').config();
var Grid = require('gridfs-stream');
var GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
var mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
var dbUri = dotenv.parsed.DB_URI;
var conn = mongoose.createConnection(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
var gfs;
conn.once('open', function () {
    // Init Stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
    return 'done';
});
var storage = new GridFsStorage({
    url: dbUri,
    file: function (req, file) {
        return new Promise(function (resolve, reject) {
            var filename = Date.now() + "-" + file.fieldname + path.extname(file.originalname);
            var fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo);
        });
    }
});
var uploads = multer({ storage: storage });
module.exports = uploads;
