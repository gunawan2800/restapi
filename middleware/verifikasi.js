const jwt=require('jsonwebtoken');
const config=require('../config/secret')
var connection=require('../koneksi');

function verifikasi(){

    return function(req,rest,next){
        let role=req.body.role;
        // cek authorization header
        var tokenWithBearer=req.headers.authorization;
        if(tokenWithBearer){
            var token=tokenWithBearer.split(' ')[1];
            // verivikasi
            jwt.verify(token,config.secret,function(error,row){
            console.log(role)
                if(error){
                   return rest.status(401).send({auth:false,message:'token tidak terdaftar'}) 
                }else{
                    if(role==2){
                        req.auth=jwt.decode;
                        next();
                        console.log(role)
                    }else{
                      
                        return rest.status(401).send({auth:false,message:'gagal mengotorisasi role nya'})    
                    }
                }
            })
        }else{
            return rest.status(401).send({auth:false,message:'token tidak tersedia'})
        }
    }
}

module.exports=verifikasi;