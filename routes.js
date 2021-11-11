'use strict';

module.exports=function(app){
    var json=require('./controller');

    app.route('/')
        .get(json.index);
    app.route('/tampil')
        .get(json.tampilsemuasiswa);
    app.route('/tampil/:id')
        .get(json.tampilid);
    app.route('/kirim')
        .post(json.tambahdatasiswa);
    app.route('/ubah')
        .put(json.editsiswa);
}