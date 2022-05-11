function validarInfo(obj){
    if(obj.nome == ''){        
         return 0;
    }
    if (obj.dt_nascimento == ''){        
     return 0;
    }
    if (obj.email == '' || ! obj.email.includes('@') ){        
         return 0;
    }
    if (obj.cpf == '') {
        return 0;
    }
    if (obj.numero == '') {        
        return 0;
    }
    if (obj.bairro == '') {     
        return 0;
    }
    if (obj.cidade == '') {       
        return 0;
    }
    if (obj.estado == '') {      
        return 0;
    }
    if (obj.cep == '') {       
        return 0;
    }
    

    return 1
 
}
module.exports = {validarInfo}