const express = require ('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const methodOverride = require('method-override')
const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const Photo = require('./models/Photo')
const photoController = require('./controllers/photoControllers')
const pageController = require('./controllers/pageController')
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
app.use(fileUpload());
app.use(methodOverride('_method',{
    methods:['POST','GET']
}))
//ROUTES
app.get('/',photoController.getAllPhotos)
app.get('/photos/:id',photoController.getPhoto)
app.get('/about',pageController.getAboutPage)
app.get('/add',pageController.getAddPage)
app.post('/photos',photoController.createPhoto)
app.get('/photos/edit/:id',pageController.getEditPage)
app.put('/photos/:id',photoController.updatePhoto)
app.delete('/photos/:id',photoController.deletePhoto)

const port = 3000
app.listen(port,()=> {
    console.log(`sunucu ${port}`)
})  