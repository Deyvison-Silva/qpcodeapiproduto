const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign')({verbose: false});
const error = require('./src/middlewares/error.js');

global.config = {
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 4200,
    isProduction: process.env.isProduction || false
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// require('./src/routes/ping')(app);
// require('./src/routes/routes.js')(app);

consign
    .include('./src/routes')
    .into(app);

app.use(error.notFound);

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000.')
// });

app.listen(global.config.port, () => {
    console.log(`Servidor rodando na porta ${global.config.port}`);
});