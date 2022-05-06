"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../database/db.js"));

var _sequelize = require("sequelize");

var _Project = _interopRequireDefault(require("./Project.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Se realiza la importación de la base de datos
//Importar los tipos de datos de sequelize
//Importar el modelo de relación
var TaskModel = _db["default"].define("tasks", {
  title: {
    type: _sequelize.DataTypes.STRING
  },
  description: {
    type: _sequelize.DataTypes.STRING
  },
  projectId: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED
  }
});

TaskModel.belongsTo(_Project["default"]);
var _default = TaskModel;
exports["default"] = _default;