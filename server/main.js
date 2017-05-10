import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import path from 'path';
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import session from 'express-session';
import api from './routes';

let dbconfig = require(__dirname+'/../server/config/db-config.json');
let connection = mysql.createConnection(dbconfig);

const app = express();
const port = 3001;

app.use('/', express.static(__dirname + "/../public"));

//미들웨어 사용하기
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//세션 사용
app.use(session({
    secret:'aiplatform$11',
    resave: false,
    saveUninitialized: true
}));
app.use('/api', api);

app.get('/subject', (req, res) =>{
    connection.query("SELECT * FROM subject", (err, rows) => {
        if(err) throw err;

        res.send(rows);
    });
});
const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
