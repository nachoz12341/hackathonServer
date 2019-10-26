const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var type = 0;
var message = "";

app.get('/', (req, res) => {
        res.send("type: "+type+" message: "+message);
});

app.post('/sensorData', (req,res) => {
        type = req.body.type;
        message = req.body.message;

        console.log(type);
        console.log(message);  
        res.sendStatus(200);      
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server started");
