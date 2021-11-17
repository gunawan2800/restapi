const express=require('express')
const BodyPareser=require('body-parser');
const bodyParser = require('body-parser');
var morgan=require('morgan');
const app=express();

// parse aplication/json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'))

// paggil routes nya
var routes=require('./routes');
routes(app);


// daftarkan menu routes dari index
app.use(`/auth`,require('./middleware'))

app.listen(3000,()=>{
    console.log('server started on port');
});