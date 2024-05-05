const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
	res.render('index', {
		message: 'hello world'
	})
})

app.listen(1000, ()=>{
	console.log('done')
})