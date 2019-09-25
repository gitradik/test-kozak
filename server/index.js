const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router/index');
const errorHandler = require('./utils/errors/errorHandler');
const port = 3001;
require('./db/mongoose');

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);
app.use('/static', express.static(__dirname + '/public'));

app.listen(port);