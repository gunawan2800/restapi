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