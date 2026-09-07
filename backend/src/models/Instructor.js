import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

export const Instructor = conn.define('instructor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'instructor',
  timestamps: false,
});

export default Instructor;
