var connection=require('../koneksi');
var mysql=require('mysql')
var md5=require('MD5')
var response=require('../res')
var jwt=require('jsonwebtoken')
var config=require('../config/secret')
var ip=require('ip');
const { query } = require('express');
// var respon=require('../res');

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

// kontroller untuk login
exports.login=function(req,res){
    var post={
        password:req.body.password,
        email:req.body.email
    }
    connection.query("SELECT*FROM user WHERE password=? AND email=?",[md5(post.password),post.email],
    function(error,rows){
        if(error){
            console.log(error)
        }else{
            if(rows.length==1){
                var token=jwt.sign({rows},config.secret,{
                    expiresIn:1440
                })
                var id_user=rows[0].id;
                var username=rows[0].username;
                var data={
                    id_user:id_user,
                    access_token:token,
                    ip_address:ip.address()
                }
                connection.query("INSERT INTO akses_token (id_user,access_token,ip_address) VALUES(?,?,?)",[data.id_user,data.access_token,data.ip_address],
                function(error,rows){
                    if(error){
                        console.log(error)
                    }else{
                        res.json({
                            success:true,
                            message:'BERHASIL  token jwt tergenarate',
                            token:token,
                            currUser:data.id_user,
                            user:username
                        })
                        }
                    }
                );
            }else{
                res.json({error:true,
                message:"email/pass salah"})
            }
        }
    });
}

// halaman rahasia
exports.halamanrahasia=function(req,res){
    response.ok("halaman sangat rahasiah",res)
}