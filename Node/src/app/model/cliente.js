const connect = require('../../config/db')
exports.InsertClient = async (values) =>{    
    const conn = await connect();
    const sql = 'INSERT INTO tb_cliente(nome,dt_nascimento,email,cpf,rua,numero,bairro,cidade,estado,cep) VALUES (?,?,?,?,?,?,?,?,?,?)'
    const insert = [values.nome, values.dt_nascimento, values.email, values.cpf, values.rua, values.numero, values.bairro, values.cidade, values.estado, values.cep];
    return await conn.query(sql, insert);
}
exports.SelectClient = async () => {
    const conn = await connect();
    const [line] = await conn.query('SELECT * FROM tb_cliente;');
    return line;
}
exports.UpdateClient = async (values) => {    
    const conn = await connect();   
    const sql = `UPDATE tb_cliente SET nome = ?,dt_nascimento = ?,email =?,rua =?,numero =?,bairro =?,cidade =?,estado =?,cep =? WHERE id = '${values.id}'`
    const update = [values.nome, values.dt_nascimento, values.email, values.rua, values.numero, values.bairro, values.cidade, values.estado, values.cep];   
    return await conn.query(sql, update);
}
exports.DeleteClient = async (id) =>{      
    const conn =await connect();
    const sql = 'DELETE FROM tb_cliente where id = ?';
    return await conn.query(sql, [id]);
}