var database = require('./database');
var tarea = {};

tarea.selectAll = function(idUsuario, callback) {
  if(database) {
    database.query("SELECT * FROM tarea_usuario WHERE idUsuario = ?",
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

tarea.select = function(idTarea, callback) {
  if(database) {
    var sql = "SELECT * FROM Tarea WHERE idTarea = ?";
    database.query(sql, idTarea,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

tarea.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Tarea SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

tarea.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Tarea SET "
    +"descripcion = ?, fecha = ? WHERE idTarea = ?";
    database.query(sql,
    [data.descripcion, data.fecha, data.idTarea],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

tarea.delete = function(idTarea, callback) {
  if(database) {
    var sql = "CALL sp_deleteTarea(?)";
    database.query(sql, idTarea,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = tarea;
