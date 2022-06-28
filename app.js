const express = require ('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

//TEMPENGİNE
app.set("view engine","ejs")
//ejs views kalsörünün içerisene bakar

//MIDDLEWARES
app.use(express.static('public'))


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


const port = 3000
app.listen(port,()=> {
    console.log(`sunucu ${port}`)
})  