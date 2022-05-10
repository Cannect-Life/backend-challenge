const app = require('./src/config/express')


// setando a portado servidor
app.listen(3000, ()=>{
    console.log('Servidor iniciado porta => 3000 :)');
});

