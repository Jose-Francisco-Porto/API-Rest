const pg = require('pg');


const conexao = new pg.Client({
    host: 'localhost',
    port: 5432,
    user:'postgres',
    password:'jfmariano',
    database:'agenda-petshop'
})

module.exports = conexao;