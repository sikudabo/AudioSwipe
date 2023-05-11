const express = require('express');
const app = express();
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const _ = require('underscore');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sslRedirect = require('heroku-ssl-redirect');
const Contract = require('web3-eth-contract');
const { CreateElection, Vote } = require('./routes');

Contract.setProvider('http://127.0.0.1:8545');

const votingAbi = JSON.parse(fs.readFileSync('./build/contracts/VotingExample.json'));

const abi = votingAbi.abi;

const contract = new Contract(abi, '0x68Ba10461f06b6Fc8c9bacbB3dAE3439C6DADF2c');


async function addElection() {
    const candidates = [
        {
            name: 'Ronny Morrell',
            id: '1',
            votes: 0,
            voters: [],
        },
        {
            name: 'Brad Luzater',
            id: '2',
            votes: 0,
            voters: [],
        },
        {
            name: 'Kyle Alumbaugh',
            id: '3',
            votes: 1,
            voters: [],
        },
    ];
    const result = await contract.methods.makeNewElection('1', '2', candidates).send({ from: '0x0A41C28cf5812418134EbD9b34F2F36B6E9AC6A8', gas: 6721975, gasPrice: '20000000000' }, (error, result) => {
        if (error) {
            return error.message;
        }
        return result;
    });

    console.log('The result was:', result);
}

// addElection();

app.set('port', process.env.PORT || 2000);
app.set('appName', 'BlockVotez');

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
    res.status('200').send('Welcome to BlockVotez');
    console.log('Welcome to BlockVotez!');
});

// Routes
app.use(CreateElection);
app.use(Vote);

// Server
const server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('Server listening on port:', app.get('port'));
});

// Catch uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
});