"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllTask = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;

var _Task = _interopRequireDefault(require("../models/Task.js"));

var _Project = _interopRequireDefault(require("../models/Project.js"));

var _utils = require("../utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importar el modelo

/*** Métodos de CRUD ***/
//GET - Obtener todos los registros
var getAllTasks = function getAllTasks(req, res) {
  var tasks;
  return regeneratorRuntime.async(function getAllTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Task["default"].findAll({
            include: {
              model: _Project["default"]
            }
          }));

        case 3:
          tasks = _context.sent;
          res.status(_utils.statusCode.OK).json(tasks);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al recuperar todos las tareas",
            error: _context.t0,
            success: false
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //GET - Obtener un registro en concreto


exports.getAllTasks = getAllTasks;

var getTask = function getTask(req, res) {
  var tasks;
  return regeneratorRuntime.async(function getTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Task["default"].findOne({
            where: {
              id: req.params.id
            },
            include: {
              model: _Project["default"]
            }
          }));

        case 3:
          tasks = _context2.sent;
          res.status(_utils.statusCode.OK).json(tasks);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al recuperar la tarea",
            error: _context2.t0,
            success: false
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //POST - Crear un nuevo registro


exports.getTask = getTask;

var createTask = function createTask(req, res) {
  return regeneratorRuntime.async(function createTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Task["default"].create(req.body));

        case 3:
          res.status(_utils.statusCode.CREATED).json({
            message: "Tarea creada correctamente"
          });
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al crear la tarea",
            error: _context3.t0,
            success: false
          });

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; //PUT - Actualizar un registro en concreto


exports.createTask = createTask;

var updateTask = function updateTask(req, res) {
  return regeneratorRuntime.async(function updateTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Task["default"].update(req.body, {
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(_utils.statusCode.OK).json({
            message: "Tarea actualizada correctamente"
          });
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al actualizar la tarea",
            error: _context4.t0,
            success: false
          });

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; //DELETE - Eliminar un registro


exports.updateTask = updateTask;

var deleteTask = function deleteTask(req, res) {
  return regeneratorRuntime.async(function deleteTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Task["default"].destroy({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(_utils.statusCode.OK).json({
            message: "Tarea eliminada correctamente"
          });
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al actualizar la tarea",
            error: _context5.t0,
            success: false
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; //DELETE - Eliminar registros en los que fue eliminado el proyecto


exports.deleteTask = deleteTask;

var deleteAllTask = function deleteAllTask(req, res) {
  return regeneratorRuntime.async(function deleteAllTask$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_Task["default"].destroy({
            where: {
              projectId: req.params.id
            }
          }));

        case 3:
          res.status(_utils.statusCode.OK).json({
            message: "Tarea eliminada correctamente"
          });
          _context6.next = 9;
          break;

        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al actualizar la tarea",
            error: _context6.t0,
            success: false
          });

        case 9:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.deleteAllTask = deleteAllTask;