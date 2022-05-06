//Se realiza la importación de la base de datos
import db from "../database/db.js";

//Importar los tipos de datos de sequelize
import { DataTypes } from "sequelize";

//Importar el modelo de relación
import ProjectModel from "./Project.js";

const TaskModel = db.define("tasks", {
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  projectId: { type: DataTypes.INTEGER.UNSIGNED },
});

TaskModel.belongsTo(ProjectModel);

export default TaskModel;
