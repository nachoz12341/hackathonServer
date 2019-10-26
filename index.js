const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
        res.send("Hello daniel!");
});

app.post('/sensorData', (req,res) => {
        const type = req.body.type;
        const message = req.body.message;

        console.log(type);
        console.log(message);  
        res.sendStatus(200);      
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server started");
