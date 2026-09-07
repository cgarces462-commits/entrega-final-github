import { NAME_DB, USER_DB, PASSWORD_DB, OBJ_CONN } from "./credentials.js";
import { Sequelize } from "sequelize";

export const CONN = new sequelize(NAME_DB, USER_DB, PASSWORD_DB, OBJ_CONN)