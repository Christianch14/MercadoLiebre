const express = require('express');
const app = express();
const path = require('path');

/*app.listen(3000, ()=>{
    console.log("Servidor 3000 corriendo")
})*/

app.listen(process.env.PORT || 3000,function(){
    console.log("Servidor 3000 corriendo");
})

app.use(express.static('Public'));

app.use(express.static('Views'));



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "./Views/home.html"));
})

app.get('/register', function(req, res){
	res.sendFile(path.join(__dirname, "register.html"));
})

app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname, "login.html"));
})

