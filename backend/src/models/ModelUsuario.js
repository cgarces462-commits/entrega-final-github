import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

export const ModelUsuario = conn.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    // Admin, Instructor, Aprendiz, Vigilante
    type: DataTypes.STRING,
    allowNull: false,
  },
  aprendiz_id: {
    // Se llena solo si el usuario ES un aprendiz
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  instructor_id: {
    // Se llena solo si el usuario ES un instructor
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'usuario',
  timestamps: false,
});

export default ModelUsuario;
