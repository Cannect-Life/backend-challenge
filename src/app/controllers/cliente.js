const cliente = require('../model/cliente')
exports.GravarCliente = async (req, res) => {
    const {data = {}} = req.body;

    const result = await cliente.InsertUsuario({
        ...req.body
    })
    if(result.length > 0 ){
        res.status(200).json({
            msg: 'Criado com sucesso!!',        
        })
    }else{
        res.status(200).json({
            msg: 'houve um erro!!',
        })

    }
 
   
   

}