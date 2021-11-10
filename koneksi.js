 var mysql=require(`mysql`);

//  buat koneksi ke db
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:''
})