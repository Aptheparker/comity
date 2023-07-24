module.exports = 
{
    apps: 
    [{
        name: 'comity server',
        script: './server.js',
        instances: 0,
        exec_mode: 'cluster',
        wait_ready: true,
        listen_timeout: 20000,
        kill_timeout: 5000
    }]
}