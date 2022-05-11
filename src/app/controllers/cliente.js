const cliente = require('../model/cliente')
const test = require('../../../tdd/cliente')
const funcao = require('../../function/')
exports.GravarCliente = async (req, res) => {   

    // função para descontruir o objeto
    let data = await funcao.validateObject(req.body);

    // usando o test para validar o formulario
    let validate = await test.validarInfo(data)
    // caso o retorno do test seja igual a zero encerrar com a msg 
    if (validate == 0) {
        res.status(500).json({
            msg: 'Erro!! Preencha os campos corretamente!',
        })
        return false;
    }

    const result = await cliente.InsertClient({
        ...data
    })
    if (result.ResultSetHeader.affectedRows > 0 ){
        res.status(200).json({
            msg: 'Criado com sucesso!!',        
        })
    }else{
        res.status(500).json({
            msg: 'houve um erro!!',
        })

    }

}

exports.SelectCliente = async (req, res) => {
    const result = await cliente.SelectClient({})
    if (result.affectedRows >= 0){
        res.status(200).json({
            data: result,
            msg: 'Success'
        })
    }else{
        res.status(500).json({
            msg: 'Error!'
        })
    }

}
exports.UpdateCliente = async (req, res) => {
    // função para descontruir o objeto
    let data = await funcao.validateObject(req.body)
    // usando o test para validar o formulario
    let validate = await test.validarInfo(data)
    // caso o retorno do test seja igual a zero encerrar com a msg 
    if (validate == 0) {
        res.status(500).json({
            msg: 'Erro!! Preencha os campos corretamente!',
        })
        return false;
    }

    const result = await cliente.UpdateClient({
        ...data
    })    
    if (result[0].affectedRows >= 0) {
        res.status(200).json({         
            msg: 'Alterado com sucesso!!'
        })
    } else {
        res.status(404).json({           
            msg: 'Cliente não encontrado'
        })
    }

}
