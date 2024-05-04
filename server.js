const express = require('express')
const path = require('path')

const app = express()


app.get('/', (req, res)=>{
	res.send('success')
})


app.listen(1000, ()=>{
	console.log('done')
})