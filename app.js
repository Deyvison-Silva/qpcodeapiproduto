const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const error = require('./src/middlewares/error.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./src/routes/ping')(app);
require('./src/routes/routes.js')(app);

app.use(error.notFound);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
});