const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
        res.send("Hello world!");
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server started");
