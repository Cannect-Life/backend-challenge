const auth = require('../model/autenticacao')

exports.auth = async(req, res) => {
   const {email, senha } = req.body   
   let obj = {
       email: email,
       senha: senha
   }
  let result = await auth.SelectClient({...obj})
  console.log(result)
 
    if (result.length >= 0) {
        res.status(200).json({
            data: result,
            msg: 'Success'
        })
    } else {
        res.status(500).json({
            msg: 'Error!'
        })
    }
}

exports.verifyToken = async (req, res) =>{
    console.log(req)
}