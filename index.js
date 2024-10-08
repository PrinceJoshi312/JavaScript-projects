const express = require('express')
const app = express()
const weatherRoutes = require('./routes/weatherRoutes'); 
require('dotenv').config()
const path = require('path');

// dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', weatherRoutes);


const port = process.env.port


app.listen(port, ()=>{
    console.log("server runnung")
})