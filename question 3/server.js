const express = require('express');
const path = require('path');
var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
const db = mongoose.connection;
// Check for DB connection
db.once('open', function(){
 console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
 console.log(err);
});

app.set('view engine', 'ejs');



app.get('/', (req, res)=>{
    var data = {name:'Abhay Tiwari',
    hobbies:['Reading Books(History)', 'Travelling']}
 
    
    res.render('home' , {data :data});
     
    });



// Start server with port 3000
app.listen(3000, function(){
 console.log("Server started on localhost:3000");

 const posts = require('./routes/posts');
app.use('/posts', posts);
}); 