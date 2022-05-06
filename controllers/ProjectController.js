//Importar el modelo
import ProjectModel from "../models/Project.js";
import { statusCode } from '../utils.js';

/*** Métodos de CRUD ***/

//GET - Obtener todos los registros
export const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.findAll();
    res.status(statusCode.OK).json(projects);
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al recuperar todos los proyectos",
      error: error,
      success: false,
    });
  }
};

//GET - Obtener un registro en concreto
export const getProject = async (req, res) => {
  try {
    const projects = await ProjectModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(statusCode.OK).json(projects);
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al recuperar el proyecto",
      error: error,
      success: false,
    });
  }
};

//POST - Crear un nuevo registro
export const createProject = async (req, res) => {
  try {
    await ProjectModel.create(req.body);
    res
      .status(statusCode.CREATED)
      .json({ message: "Proyecto creado correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al crear el proyecto",
      error: error,
      success: false,
    });
  }
};

//PUT - Actualizar un registro en concreto
export const updateProject = async (req, res) => {
  try {
    await ProjectModel.update(req.body, { where: { id: req.params.id } });
    res
      .status(statusCode.OK)
      .json({ message: "Proyecto actualizado correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al actualizar la tarea",
      error: error,
      success: false,
    });
  }
};

//DELETE - Eliminar un registro
export const deleteProject = async (req, res) => {
  try {
    await ProjectModel.destroy({ where: { id: req.params.id } });
    res
      .status(statusCode.OK)
      .json({ message: "Proyecto eliminado correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al eliminar el proyecto",
      error: error,
      success: false,
    });
  }
};
