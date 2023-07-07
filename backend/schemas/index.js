const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
const connect = () => 
{
    if (process.env.NODE_ENV !== 'production')
    {
        mongoose.set('debug', true);
    }

    mongoose.connect(uri, 
    {
        dbName: 'comity',
        useNewUrlParser: true,
    })
    .then(() =>
    {
        console.log('MongoDB Connection Established');
    })
    .catch((err) =>
    {
        console.log('MongoDB Connection Failed', err);
    });   
};

mongoose.connection.on('error', (error) =>
{
    console.error('MongoDB Connection Error', error);
});
mongoose.connection.on('disconnected', () =>
{
    console.error('Disconnected. Retrying connection.');
    connect();
});

module.exports = connect;