const mongoose = require('mongoose');

const connect = () => 
{
    if (process.env.NODE_ENV !== 'production')
    {
        mongoose.set('debug', true);
    }

    try 
    {
        mongoose.connect('mongodb://shPark:snghyuprx1akx2@localhost:27107/admin', 
        {
            dbName: 'comity',
            useNewUrlParser: true,
        });
    } 
    catch (err)
    {
        console.error(err);
    }
}

mongoose.connection.on('error', (error) =>
{
    console.error('MongoDB connection error', error);
});
mongoose.connection.on('disconnected', () =>
{
    console.error('Disconnected. Retrying connection.');
    connect();
});

module.exports = connect;