import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

export const ModelAprendiz = conn.define('aprendiz', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_documento: {
    // CC, TI, CE
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_documento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ficha_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    // Activo, Retirado, Certificado
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'aprendiz',
  timestamps: false,
});

export default ModelAprendiz;
