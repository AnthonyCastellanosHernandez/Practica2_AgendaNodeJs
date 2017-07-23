var database = require('./database');
var categoria = {};

categoria.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Categoria",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

categoria.select = function(idCategoria, callback) {
  if(database) {
    var sql = "SELECT * FROM Categoria WHERE idCategoria = ?";
    database.query(sql, idCategoria,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

categoria.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Categoria SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

categoria.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Categoria SET "
    +"nombreCategoria = ? WHERE idCategoria = ?";
    database.query(sql,
    [data.nombreCategoria, data.idCategoria],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

categoria.delete = function(idCategoria, callback) {
  if(database) {
    var sql = "CALL sp_deleteCategoria(?)";
    database.query(sql, idCategoria,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = categoria;
