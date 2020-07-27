const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// HEADERS
app.use(cors());

// SEE QUERIES
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// TO RECIVE JSON
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// ROUTES
app.use('/users', require('../routes/usersV'));

// INIT DB
require('./database');

// INIT LISTENING WEBSERVER
(async () => {
    try {
        await app.listen(3000);
        console.log('Server on');
    } catch (e) {
        console.log('Error triying to on the web server');
    }
})();