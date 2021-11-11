 var mysql=require(`mysql`);

//  buat koneksi ke db
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_konsentrasi'
});
conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

module.exports.conn;


