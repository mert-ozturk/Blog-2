const express = require ('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const path = require('path')
const Photo = require('./models/Photo')

const app = express()

//connect DB
mongoose.connect('mongodb://localhost/cleanblogs',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//TEMPENGİNE
app.set("view engine","ejs")
//ejs views kalsörünün içerisene bakar

//MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ROUTES
app.get('/',(req,res)=>{
    res.render('index')
       
})

app.get('/about',(req,res)=>{
    res.render('about')
       
})

app.get('/add',(req,res)=>{
    res.render('add')
       
})

app.post('/photos',async (req,res)=>{
   await Photo.create(req.body)
    res.redirect('/')
})



const port = 3000
app.listen(port,()=> {
    console.log(`sunucu ${port}`)
})  