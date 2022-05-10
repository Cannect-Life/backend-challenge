const connect = require('../../config/db')
exports.InsertUsuario = async (values) =>{
    
    const conn = await connect();
    const sql = 'INSERT INTO tb_cliente(nome,dt_nascimento,email,cpf,rua,numero,bairro,cidade,estado,cep) VALUES (?,?,?,?,?,?,?,?,?,?)'
    const insert = [values.nome, values.dt_nascimento, values.email, values.cpf, values.rua, values.numero, values.bairro, values.cidade, values.estado, values.cep];

    return await conn.query(sql, insert);


}