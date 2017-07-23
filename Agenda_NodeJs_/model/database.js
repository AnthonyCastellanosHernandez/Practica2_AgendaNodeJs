var mysql = require("mysql");
var parametros = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Agenda_NodeJs'
};
var connection = mysql.createConnection(parametros);

module.exports = connection;
