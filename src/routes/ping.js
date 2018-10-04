module.exports = (app) => {
    app.get('/ping', (req, res) => {
        res.send({ date: new Date() + '....pong' });
    });
}