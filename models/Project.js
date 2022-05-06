//Se realiza la importación de la base de datos
import db from "../database/db.js";

//Importar los tipos de datos de sequelize
import { DataTypes } from "sequelize";

const ProjectModel = db.define("projects", {
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

export default ProjectModel;
