"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _TaskController = require("../controllers/TaskController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Utilizar router para la arquitectura REST
//Métodos para obtener registros
var router = _express["default"].Router(); //Get todos los registros


router.get("/", _TaskController.getAllTasks); //Get un único registro

router.get("/:id", _TaskController.getTask); //Post crear un registro

router.post("/", _TaskController.createTask); //Put actualizar un registro

router.put("/:id", _TaskController.updateTask); //Delete eliminar un registro

router["delete"]("/:id", _TaskController.deleteTask); //Delete eliminar un registro

router["delete"]("/proyecto/:id", _TaskController.deleteAllTask);
var _default = router;
exports["default"] = _default;