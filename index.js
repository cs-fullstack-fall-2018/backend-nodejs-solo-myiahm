const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();


app.get('./greetingPage/:name', function (req,res) {
    var name = req.body.name;
     if (name.length>=1){
         res.send("Hello"+name+"Welcome to my server!")
     }else{res.send("error")}
});

const port = process.env.port||5000;
app.listen(port);