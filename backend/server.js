const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const connect = require('./schemas');
const authRouter = require('./routes/auth');
const registerRouter = require('./routes/register');

const app = express();
app.set('port', process.env.PORT || 3002);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

let isDisableKeepAlive = false;

connect();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = 
{
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
}
app.use(cors(corsOptions));

app.use('/auth', authRouter);
app.use('/register', registerRouter);

app.use((req, res, next) =>
{
    if(isDisableKeepAlive)
    {
        res.set('Connection', 'close');
    }
    next();
});

app.use((req, res, next) => 
{
    const error = new Error(`${req.method} ${req.url} router doesn't exist.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) =>
{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () =>
{
    //process.send('ready');
    console.log(`Listening at the port no. ${app.get('port')}`);
});

process.on('SIGINT', () =>
{
    isDisableKeepAlive = true;
    app.close(() =>
    {
        console.log('server closed');
        process.exit(0);
    });
});