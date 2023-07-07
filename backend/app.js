const express = require('express');
const path = require('path');
const { createServer } = require('http');

const WebSocket = require('ws');

const cookieParser = require('cookie-parser')
const morgan = require('morgan');

const session = require('express-session');
const dotenv = require('dotenv');

const connect = require('./schemas');

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => 
{
    const id = setInterval(() =>
    {
        ws.send(JSON.stringify(process.memoryUsage()), () =>
        {

        });
    }, 100);
    console.log('started client interval');

    ws.on('close', () =>
    {
        console.log('stopping client interval');
        clearInterval(id);
    });        
});

server.listen(8080, () =>
{
    console.log('Listening on http://0.0.0.0:8080');
});


//app.set('port', process.env.PORT || 8001);

// Connect to MongoDB
// connect();