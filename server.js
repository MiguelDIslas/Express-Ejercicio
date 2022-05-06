import express from "express";
import cors from "cors";
import db from "./database/db.js";
//Enrutadores
import taskRoutes from "./routes/TaskRoutes.js";
import projectRoutes from "./routes/ProjectRoutes.js";

const port = process.env.PORT || 8000;
const api = process.env.API_URL || "/api/v1";

const app = express();
app.use(cors());
app.use(express.json());

app.use(`${api}/tareas`, taskRoutes);
app.use(`${api}/proyectos`, projectRoutes);

//Definir la conexión de la base de datos
try {
  await db.authenticate();
  console.log("Conexión a la base de datos establecida");
} catch (error) {
  console.log(`Error al conectar a la base de datos: ${error}`);
}

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
