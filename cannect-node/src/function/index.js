const bcrypt = require('bcrypt')
exports.validateObject = (obj) =>{
    const { nome = '', dt_nascimento = '', email = '', cpf = '' } = obj
    let data = {}
    // validando se o o endereço e um objeto ou não se for descontruo as informações para inserir ao banco de dados
    // se não apenas passo o valor para um novo objeto
    if (typeof obj.endereco !== 'undefined') {
        data = {
            nome: nome,
            dt_nascimento: dt_nascimento,
            email: email,
            cpf: cpf,
            rua: obj.endereco.rua,
            numero: obj.endereco.numero,
            bairro: obj.endereco.bairro,
            cidade: obj.endereco.cidade,
            estado: obj.endereco.estado,
            cep: obj.endereco.cep
        }
    } else {
        data = obj
    }
    return data;
}

// cryptografando a senha
exports.hash = (senha) => {
    return bcrypt.hash(senha, 10);

}