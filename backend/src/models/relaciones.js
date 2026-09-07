import { Programa } from './Programa.js';
import { Ficha } from './Ficha.js';
import { Instructor } from './Instructor.js';
import { Aprendiz } from './Aprendiz.js';
import { RegistroIngreso } from './RegistroIngreso.js';
import { Usuario } from './Usuario.js';
import { FichaInstructor } from './FichaInstructor.js';

// Ref: ficha.programa_id > programa.id
Programa.hasMany(Ficha, { foreignKey: 'programa_id', as: 'fichas' });
Ficha.belongsTo(Programa, { foreignKey: 'programa_id', as: 'programa' });

// Ref: ficha.id < aprendiz.ficha_id
Ficha.hasMany(Aprendiz, { foreignKey: 'ficha_id', as: 'aprendices' });
Aprendiz.belongsTo(Ficha, { foreignKey: 'ficha_id', as: 'ficha' });

// Ref: aprendiz.id < registro_ingreso.aprendiz_id
Aprendiz.hasMany(RegistroIngreso, { foreignKey: 'aprendiz_id', as: 'registros_ingreso' });
RegistroIngreso.belongsTo(Aprendiz, { foreignKey: 'aprendiz_id', as: 'aprendiz' });

// Ref: ficha.id <> instructor.id (muchos a muchos, mediante ficha_instructor)
Ficha.belongsToMany(Instructor, { through: FichaInstructor, foreignKey: 'ficha_id', otherKey: 'instructor_id', as: 'instructores' });
Instructor.belongsToMany(Ficha, { through: FichaInstructor, foreignKey: 'instructor_id', otherKey: 'ficha_id', as: 'fichas' });

// Ref: usuario.aprendiz_id - aprendiz.id (uno a uno)
Usuario.belongsTo(Aprendiz, { foreignKey: 'aprendiz_id', as: 'aprendiz' });
Aprendiz.hasOne(Usuario, { foreignKey: 'aprendiz_id', as: 'usuario' });

// Ref: usuario.instructor_id - instructor.id (uno a uno)
Usuario.belongsTo(Instructor, { foreignKey: 'instructor_id', as: 'instructor' });
Instructor.hasOne(Usuario, { foreignKey: 'instructor_id', as: 'usuario' });

export {
  Programa,
  Ficha,
  Instructor,
  Aprendiz,
  RegistroIngreso,
  Usuario,
  FichaInstructor,
};
