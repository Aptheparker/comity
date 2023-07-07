const express = require('express');
const path = require('path');
const morgan = require('morgan');

const connect = require('./schemas');
const usersRouter = require('./routes/users');

const app = express();
app.set('port', process.env.PORT || 3002);
app.set('view engine', 'html');

connect();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', usersRouter);

app.use((req, res, next) => 
{
    const error = new Error(`${req.method} ${req.url} router doesn't exist.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) =>
{
    req.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () =>
{
    console.log(app.get('port'), '번 포트에서 대기 중');
});