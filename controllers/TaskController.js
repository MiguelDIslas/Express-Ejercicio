//Importar el modelo
import TaskModel from "../models/Task.js";
import ProjectModel from "../models/Project.js";
import { statusCode } from "../utils.js";

/*** Métodos de CRUD ***/

//GET - Obtener todos los registros
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll({
      include: { model: ProjectModel },
    });
    res.status(statusCode.OK).json(tasks);
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al recuperar todos las tareas",
      error: error,
      success: false,
    });
  }
};

//GET - Obtener un registro en concreto
export const getTask = async (req, res) => {
  try {
    const tasks = await TaskModel.findOne({
      where: {
        id: req.params.id,
      },
      include: { model: ProjectModel },
    });
    res.status(statusCode.OK).json(tasks);
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al recuperar la tarea",
      error: error,
      success: false,
    });
  }
};

//POST - Crear un nuevo registro
export const createTask = async (req, res) => {
  try {
    await TaskModel.create(req.body);
    res
      .status(statusCode.CREATED)
      .json({ message: "Tarea creada correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al crear la tarea",
      error: error,
      success: false,
    });
  }
};

//PUT - Actualizar un registro en concreto
export const updateTask = async (req, res) => {
  try {
    await TaskModel.update(req.body, { where: { id: req.params.id } });
    res
      .status(statusCode.OK)
      .json({ message: "Tarea actualizada correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al actualizar la tarea",
      error: error,
      success: false,
    });
  }
};

//DELETE - Eliminar un registro
export const deleteTask = async (req, res) => {
  try {
    await TaskModel.destroy({ where: { id: req.params.id } });
    res
      .status(statusCode.OK)
      .json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al actualizar la tarea",
      error: error,
      success: false,
    });
  }
};

//DELETE - Eliminar registros en los que fue eliminado el proyecto
export const deleteAllTask = async (req, res) => {
  try {
    await TaskModel.destroy({ where: { projectId: req.params.id } });
    res
      .status(statusCode.OK)
      .json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(statusCode.INTERNAL_ERROR).json({
      message: "Sucedió un error al actualizar la tarea",
      error: error,
      success: false,
    });
  }
};
