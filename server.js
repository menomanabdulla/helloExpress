
const express = require('express')
const app = express()
var morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Noman Abdulla',
        dept: 'CSE 22intake,'
    })
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'404.html'))
})

app.listen(PORT,()=>{
    console.log('Server Successfully listen to port '+PORT)
})