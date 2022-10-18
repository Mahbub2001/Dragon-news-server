const express = require('express')

const app = express();
const cors = require('cors');

app.use(cors())

const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("news api running");
});

const categories = require('./data/Categories.json')


app.get('/news-categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log('Dragon news server running on port', port);
})