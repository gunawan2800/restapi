var express=require('express')
var auth=require('./auth')
var router=express.Router();

// registrasi
router.post(`/api/v1/register`,auth.registrasi);
// login
router.post(`/api/v1/login`,auth.login);

module.exports=router;
