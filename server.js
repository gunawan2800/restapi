const express=require('express')
const BodyPareser=require('body-parser');
const bodyParser = require('body-parser');
const app=express();

// parse aplication/json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// paggil routes nya
var routes=require('./routes');
routes(app);

app.listen(3000,()=>{
    console.log('server started on port');
});