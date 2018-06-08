
const express = require('express')
const app = express()
var morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3000
app.use(morgan('dev'))

app.set('view engine','ejs')
app.set('views','./views')

app.get('/', (req, res) => {
   res.render('index',{
       title: 'i am the home page',
       data: 'Say hello form home page'
   })
})


app.get('/about', (req, res) => {
    //console.log(res)
    res.json({
        name: 'Noman Abdulla',
        dept: 'CSE 22intake,'
    })
})

app.get('/users/:id', (req, res) => {
    res.send(`User ID is ${req.params.id}`)
})

app.get('/posts/',(req,res)=>{
    res.render('allposts',{posts})
})

app.get('/posts/:id', (req, res) => {
    let id = req.params.id
    let post = null
    for(let i = 0;i<posts.length;i++){
        if(posts[i].id == id){
            post = posts[i]
            break
        }
    }
    if(post){
        res.render('posts',{post})
    }else{
        res.render('posts',{post:false})
    }
})

app.get('/api/posts', (req, res) => {
    res.json(posts)
})
app.get('/person',(req,res)=>{
    res.send({
        name: 'perosn one',
        address: 'CA',
        height: '5fit 7inch'
    })
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'404.html'))
})

app.listen(PORT,()=>{
    console.log('Server Successfully listen to port '+PORT)
})

const posts = [
    {
        id: 1,
        title: 'I am post One',
        content: 'Hello from post One'
    },{
        id: 2,
        title: 'I am post Two',
        content: 'Hello from post Two'
    },{
        id: 3,
        title: 'I am post Three',
        content: 'Hello from post Three'
    },{
        id: 4,
        title: 'I am post Four',
        content: 'Hello from post Four'
    }
]