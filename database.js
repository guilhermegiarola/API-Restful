const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port:'3306',
    database:'Pesquisador'
});

connection.connect(function(err){
    if (err) return console.log(err);
    console.log('Connected!');
});

connection.query("INSERT INTO Pesquisador(id, nome, senha, adm) VALUES ('2', 'Guilherme', '123', '1')", function(err, result){
    if(!err){
        console.log('Usuário cadastrado com sucesso.');
    } else {
        console.log('Erro ao cadastrar o usuário!');
    }
});

module.exports = connection;