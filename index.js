const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
}

app.get('/', (req, res) => {
        res.send("Height: "+localStorage.getItem('height')+" Temperature: "+localStorage.getItem('temperature'));
});

app.post('/sensorData', (req,res) => {
        if(req.body.type==0)
                localStorage.setItem('height', req.body.message);
        else
                localStorage.setItem('temperature', req.body.message);

        res.sendStatus(200);      
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server started");
