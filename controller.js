'use strict';
var response=require('./res');
var connection=require('./koneksi');

exports.index=function(req,res){
    response.ok('aplikasi rest ku berjalan!!',res)
};

// menampilkan  semua data siswa
exports.tampilsemuasiswa=function(req,res){
    connection.query(`SELECT * FROM siswa`,function(error,row,fileds){
            if(error){
                connection.log(error)
            }
            else{
                response.ok(row, res)
            }
        })
};

// menampilkan data berdasarkan id
exports.tampilid=function(req,res){
    let id=req.params.id;
    connection.query(`SELECT * FROM siswa WHERE id_siswa=?`,[id],
    function(error,row,fileds){
        if(error){
            console.log(error)
        }else{
            response.ok(row,res)
        }
    }
    )
}

// menambah data siswa
exports.tambahdatasiswa=function(req,res){
    var nama=req.body.nama;
    var nis=req.body.nis;
    var kelas=req.body.kelas;

    connection.query(`INSERT INTO siswa (nama,nis,kelas) VALUES(?,?,?)`,[nama,nis,kelas],
    function(error,row,fields){
        if(error){
            console.log(error)
        }else{
            response.ok("DATA MASUK!",res)
        }
    }
    )
}