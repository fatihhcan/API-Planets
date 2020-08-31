const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

const app = express();

app.use(bodyParser.json());
const postRoute = require('./router/posts');
app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('hello');
});


mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connect to db')
);

app.listen(3000);