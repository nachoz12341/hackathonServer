const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
        res.send("Hello daniel!");
});

app.post('/', (req,res) => {
        const data = req.body.data;
        res.send(data);
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server started");
