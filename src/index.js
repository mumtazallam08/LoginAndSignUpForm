const express = require('express');
const collection = require('./mongodb');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','hbs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/signup', async(req,res)=>{
    const data  ={
        email:req.body.email,
        name:req.body.name,
        password:req.body.password
    }
  await collection.insertMany([data]);
  res.render("home")
});

app.post('/login', async(req,res)=>{
    try{
        const email = await collection.findOne({email:req.body.email});

        if(email.password===req.body.password){
            res.render('home')
        }else{
            res.send('<h2>Worng Password');
        }
    }
    catch{
        res.send('<h2>Worng details');
    }
})

app.listen('3000',()=>{
    console.log("Port running successfully");
});