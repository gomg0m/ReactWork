const mariadb = require('mariadb');
//const vals = require('./consts.js');
 
const pool = mariadb.createPool({
    host: 'localhost', port: '3306',
    user: 'root', password: 'kitech123!',
    connectionLimit: 5
});
 
async function GetUserList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();        
        conn.query('USE kjy');
        rows = await conn.query('SELECT * FROM test');
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows;
    }
}
 
module.exports = {
    getUserList: GetUserList
}