class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarAtendimentos()
    }
    //Sql para criar a tabela no banco de dados 
    //O IF NOT EXISTS é para que, caso haja a tabela no banco de dados não apresentar erro no banco de daos
    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id integer CONSTRAINT pk_id_atedimentos PRIMARY KEY, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, dataatua timestamp NOT NULL, datacriacao timestamp NOT NULL);'
                    this.conexao.query(sql, erro => {
                    if (erro) {
                        console.log(erro);
                    }else{
                        console.log('Tabela de Atendimentos criada com sucesso!');
                    }
                });

    }
}
module.exports = new Tabelas;