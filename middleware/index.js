var express=require('express')
var auth=require('./auth');
var verifikasi = require('./verifikasi');
var router=express.Router();
// var verifikasi=require('./verifikasi')

// registrasi
router.post(`/api/v1/register`,auth.registrasi);

// login
router.post(`/api/v1/login`,auth.login);

// alamat yang perlu diotorisasi
router.get(`/api/v1/rahasia`,verifikasi(0),auth.halamanrahasia)

module.exports=router;
