const express = require('express');

const app = express();

const path = require('path');

app.get('/',(req, res) =>{
   
    res.sendFile((__dirname + '/views/home.html'));
 
});

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views'));

app.listen(8000, function() {return  console.log('Servidor corriendo')});
