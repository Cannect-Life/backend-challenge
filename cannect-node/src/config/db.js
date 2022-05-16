async function connect(){
    //validando a conexão
    if(global.connection && global.connection.state !== 'disconnected') return global.connection;

    const mysql = require( 'mysql2/promise');
    //setando a configuração da conexão
    const conn = await mysql.createConnection('mysql://root:@localhost:3306/cannect');
    console.log('conectou!!!');

     
    global.connection = conn;
    return conn
}
module.exports = connect;