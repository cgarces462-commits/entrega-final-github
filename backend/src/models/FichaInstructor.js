import { DataTypes } from 'sequelize';
import { conn } from '../config/database.js';

// Tabla intermedia para la relación muchos a muchos entre ficha e instructor
export const FichaInstructor = conn.define('ficha_instructor', {
  ficha_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  instructor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'ficha_instructor',
  timestamps: false,
});

export default FichaInstructor;
