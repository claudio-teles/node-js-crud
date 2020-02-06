const express = require("express");
const session = require("express-session")

var SQLiteStore = require('connect-sqlite3')(session);
const bodyParser = require("body-parser");

const index = require('./routes/index');
const login = require('./routes/login/login');
const users = require('./routes/users/user')

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(session(
        {
            store: new SQLiteStore,
            secret: 'kfmbcurphjks7596',
            expires: 30000,
            maxAge: 30000,
            resave: false, 
            saveUninitialized: true, 
            cookie: {
                maxAge: 7 * 24 * 60 * 60 * 1000 // 1 semana.
            }
        }
    )
);

server.use('/node-js-crud/routes', index, login, users);

var port = process.env.PORT || 2500;

server.listen(port, 'localhost', () => {
    console.log('Server running on the port: 2500.')
});