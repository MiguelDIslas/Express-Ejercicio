import { Sequelize } from "sequelize";

const db = new Sequelize("admin_panel", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
