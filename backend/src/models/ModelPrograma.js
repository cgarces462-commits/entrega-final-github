import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

export const ModelPrograma = conn.define('programa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nivel_formacion: {
    // Tecnólogo, Técnico
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracion_meses: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'programa',
  timestamps: false,
});

export default ModelPrograma;
