//Utilizar router para la arquitectura REST
import express from "express";
//Métodos para obtener registros
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTask,
} from "../controllers/TaskController.js";

const router = express.Router();

//Get todos los registros
router.get("/", getAllTasks);

//Get un único registro
router.get("/:id", getTask);

//Post crear un registro
router.post("/", createTask);

//Put actualizar un registro
router.put("/:id", updateTask);

//Delete eliminar un registro
router.delete("/:id", deleteTask);

//Delete eliminar un registro
router.delete("/proyecto/:id", deleteAllTask);


export default router;
