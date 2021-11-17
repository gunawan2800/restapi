var connection=require('../koneksi');
var mysql=require('mysql')
var md5=require('MD5')
var response=require('../res')
var jwt=require('jsonwebtoken')
var config=require('../config/secret')
var ip=require('ip');
const { query } = require('express');

// controller u/ registrasi
exports.registrasi=function(req,res){
    var post={
        username:req.body.username,
        email:req.body.email,
        password:md5(req.body.password),
        role:req.body.role,
        tanggal_daftar:new Date()
    }
    connection.query(`SELECT email FROM user WHERE email=?`,[post.email],function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length==0){
                connection.query(`INSERT INTO user (username,email,password,role,tanggal_daftar) VALUES(?,?,?,?,?)`,[post.username,post.email,post.password,post.role,post.tanggal_daftar],function(erroe,rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("berhasil menambah data user",res);
                        console.log(post)
                    }
                })
            }else{
                response.ok("email sudah ada!!!",res)
            }
        }
    })
    
}
