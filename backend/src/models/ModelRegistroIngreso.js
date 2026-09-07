import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

export const ModelRegistroIngreso = conn.define('registro_ingreso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  aprendiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tipo: {
    // Entrada, Salida
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'registro_ingreso',
  timestamps: false,
});

export default ModelRegistroIngreso;
