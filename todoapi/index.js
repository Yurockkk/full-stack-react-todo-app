var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

const path = require('path');    
var todoRoutes = require("./routes/todos");

app.use(express.static(path.resolve(__dirname, '../todo_reactfrontend/build'))); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.get('/',function(req,res){
    // res.send('HELLO FROM THE ROOT ROUTE');
    res.sendFile("index.html");
})

app.use('/api/todos',todoRoutes);

app.listen(port, function(){
    console.log(`app is running on ${port}`);
})