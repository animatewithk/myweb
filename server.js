const express = require('express');
const fs = require('fs')
const app = express();
const port = 1000;

//management of files

//management of requests and responses
app.get('/', (req, res)=>{
	res.send('hello world')
});

app.get('/about', (req, res)=>{
	res.send('This is about page')
});

//port configuration
app.listen(port, ()=>{
	console.log("the server is started successfully")
});