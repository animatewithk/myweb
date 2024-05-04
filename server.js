const express = require('express')
const path = require('path')

const app = express()

const StaticPath = path.join(__dirname, 'public')
app.use(express.static(StaticPath))

app.get('/', (req, res)=>{
	res.sendFile(path.join(StaticPath, 'index.html'))
})
app.get('/about', (req, res)=>{
	res.sendFile(path.join(StaticPath, 'about.html'))
})

app.listen(1000, ()=>{
	console.log('done')
})