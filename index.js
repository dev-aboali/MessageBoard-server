const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const messages = require('./database/messageModel');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('Full stack Vue.js message board app');
});

app.post("/messages", (req, res) => {
    console.log(req.body);
    messages.create(req.body)
        .then((message) => {
            res.json(message);
        }).catch((error) => {
            res.status(500);
            res.json(error);
        });
});

app.get("/messages", (req, res) => {
    messages.getAll().then(messages => {
        res.json(messages)
    });
        
});
const port = process.env.PORT || 5555;
app.listen(port, () => {
    console.log(`Server is running on ${port} port`)
})

