import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

export const Ficha = conn.define('ficha', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero_ficha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  programa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  jornada: {
    // Mañana, Tarde, Noche
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fecha_fin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: 'ficha',
  timestamps: false,
});

export default Ficha;
