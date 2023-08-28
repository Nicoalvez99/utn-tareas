var pool = require('./bd');
var md5 = require('md5');

async function getUserMyUserNameAndPassword(usuario, contraseña){
    try {
        var query = 'select * from usuarios where usuario = ? and contraseña = ? limit 1';
        var rows = await pool.query(query, [usuario, md5(contraseña)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserMyUserNameAndPassword }