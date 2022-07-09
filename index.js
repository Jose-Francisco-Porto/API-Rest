const customExpress = require('./config/cunstomExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

//conectar com o banco de dados.
conexao.connect(erro =>{
    if (erro) {
        console.log(erro);
    }else{
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000 fazendo um get'));

    }
})
