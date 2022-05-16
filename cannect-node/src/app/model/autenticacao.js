const connect = require('../../config/db')
exports.SelectClient = async (values) => {
    console.log('aq',values)
    values.email = '%'+values.email+'%'
    values.senha = '%' + values.senha + '%'
    const conn = await connect();
    const sql = `SELECT * FROM tb_login WHERE email like '${values.email}' AND senha like '${values.senha}'`
    const [line] = await conn.query(sql);
    return line
}