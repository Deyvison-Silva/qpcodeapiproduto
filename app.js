const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign')({verbose: false});
const error = require('./src/middlewares/error.js');

const config = {
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 4200,
    isProduction: process.env.isProduction || false
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

consign
    .include('./src/routes')
    .into(app);

app.use(error.notFound);


app.listen(config.port, () => {
    console.log(`Servidor rodando na porta ${config.port}`);
});
