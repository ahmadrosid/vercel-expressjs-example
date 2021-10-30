const app = require('express')();

app.get('/api', (req, res) => {
    res.send({
        message: "Hello welcome home!"
    })
});

module.exports = app;
