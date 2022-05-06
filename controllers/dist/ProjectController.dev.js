"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProject = exports.getAllProjects = void 0;

var _Project = _interopRequireDefault(require("../models/Project.js"));

var _utils = require("../utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importar el modelo

/*** Métodos de CRUD ***/
//GET - Obtener todos los registros
var getAllProjects = function getAllProjects(req, res) {
  var projects;
  return regeneratorRuntime.async(function getAllProjects$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].findAll());

        case 3:
          projects = _context.sent;
          res.status(_utils.statusCode.OK).json(projects);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al recuperar todos los proyectos",
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


exports.getAllProjects = getAllProjects;

var getProject = function getProject(req, res) {
  var projects;
  return regeneratorRuntime.async(function getProject$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].findOne({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          projects = _context2.sent;
          res.status(_utils.statusCode.OK).json(projects);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al recuperar el proyecto",
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


exports.getProject = getProject;

var createProject = function createProject(req, res) {
  return regeneratorRuntime.async(function createProject$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].create(req.body));

        case 3:
          res.status(_utils.statusCode.CREATED).json({
            message: "Proyecto creado correctamente"
          });
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al crear el proyecto",
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


exports.createProject = createProject;

var updateProject = function updateProject(req, res) {
  return regeneratorRuntime.async(function updateProject$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].update(req.body, {
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(_utils.statusCode.OK).json({
            message: "Proyecto actualizado correctamente"
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


exports.updateProject = updateProject;

var deleteProject = function deleteProject(req, res) {
  return regeneratorRuntime.async(function deleteProject$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].destroy({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(_utils.statusCode.OK).json({
            message: "Proyecto eliminado correctamente"
          });
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.status(_utils.statusCode.INTERNAL_ERROR).json({
            message: "Sucedió un error al eliminar el proyecto",
            error: _context5.t0,
            success: false
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.deleteProject = deleteProject;