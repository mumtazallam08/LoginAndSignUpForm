const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/LoginAndSignUp')
.then(()=>{
    console.log('Mongo connected');
})
.catch(()=>{
    console.log('failed to connect');
})

const LoginScheme = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('students',LoginScheme);


module.exports = collection;