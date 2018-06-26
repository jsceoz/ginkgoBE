import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressJWT from 'express-jwt';
import cors from 'cors'

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//json-web-token
global.jwtKey = 'Ginkgo';
app.use(expressJWT({secret: jwtKey}).unless(req => {
    return (
        req.originalUrl === '/auth/administratorUser/signUp' ||
        req.originalUrl === '/auth/administratorUser/login' ||
        /\/registration\/registrationActivity\/.+/i.test(req.originalUrl) && req.method === 'GET' ||
        /\/registration\/registrationItem\/.*/i.test(req.originalUrl)
    )
}));

//mongodb
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/test');
const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'mongodb connection error:'));
mongodb.once('open', function() {
    console.log('mongodb connected')
});

//redis
// import redis from 'redis';
// const redisClient = redis.createClient();
// redisClient.on('ready', err => {
//     if (!err) {
//         console.log('redis connected')
//     } else {
//         console.error(err)
//     }
// });

//router
import indexRouter from './routes/index';
import authRouter from './applications/auth';
import registrationRouter from './applications/registration';
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/registration', registrationRouter);

export default app;
