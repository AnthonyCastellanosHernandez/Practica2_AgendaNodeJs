var database = require('./database');
var contacto = {};

contacto.selectAll = function(idUsuario, callback) {
  if(database) {
    database.query("SELECT * FROM contacto_usuario WHERE idUsuario = ?",
    idUsuario,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

contacto.select = function(idContacto, callback) {
  if(database) {
    var sql = "SELECT * FROM Contacto WHERE idContacto = ?";
    database.query(sql, idContacto,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

contacto.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Contacto SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

contacto.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Contacto SET "
    +"nombre = ?, apellido = ?, direccion = ?, telefono = ?, correo = ?, idCategoria = ?  "
    +"WHERE idContacto = ?";
    database.query(sql,
    [data.nombre, data.apellido, data.direccion, data.telefono, data.correo, data.idCategoria, data.idContacto],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, data);
      }
    });
  }
}

contacto.delete = function(idContacto, callback) {
  if(database) {
    var sql = "CALL sp_deleteContactoDos(?)";
    database.query(sql, idContacto,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = contacto;
