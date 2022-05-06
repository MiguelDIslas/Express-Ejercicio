//Utilizar router para la arquitectura REST
import express from "express";
//Métodos para obtener registros
import {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/ProjectController.js";

const router = express.Router();

//Get todos los registros
router.get("/", getAllProjects);

//Get un único registro
router.get("/:id", getProject);

//Post crear un registro
router.post("/", createProject);

//Put actualizar un registro
router.put("/:id", updateProject);

//Delete eliminar un registro
router.delete("/:id", deleteProject);

export default router;
