import { ModelPrograma } from './ModelPrograma.js';
import { ModelFicha } from './ModelFicha.js';
import { ModelInstructor } from './ModelInstructor.js';
import { ModelAprendiz } from './ModelAprendiz.js';
import { ModelRegistroIngreso } from './ModelRegistroIngreso.js';
import { ModelUsuario } from './ModelUsuario.js';
import { ModelFichaInstructor } from './ModelFichaInstructor.js';

// Ref: ficha.programa_id > programa.id
ModelPrograma.hasMany(ModelFicha, { foreignKey: 'programa_id', as: 'fichas' });
ModelFicha.belongsTo(ModelPrograma, { foreignKey: 'programa_id', as: 'programa' });

// Ref: ficha.id < aprendiz.ficha_id
ModelFicha.hasMany(ModelAprendiz, { foreignKey: 'ficha_id', as: 'aprendices' });
ModelAprendiz.belongsTo(ModelFicha, { foreignKey: 'ficha_id', as: 'ficha' });

// Ref: aprendiz.id < registro_ingreso.aprendiz_id
ModelAprendiz.hasMany(ModelRegistroIngreso, { foreignKey: 'aprendiz_id', as: 'registros_ingreso' });
ModelRegistroIngreso.belongsTo(ModelAprendiz, { foreignKey: 'aprendiz_id', as: 'aprendiz' });

// Ref: ficha.id <> instructor.id (muchos a muchos, mediante ficha_instructor)
ModelFicha.belongsToMany(ModelInstructor, { through: ModelFichaInstructor, foreignKey: 'ficha_id', otherKey: 'instructor_id', as: 'instructores' });
ModelInstructor.belongsToMany(ModelFicha, { through: ModelFichaInstructor, foreignKey: 'instructor_id', otherKey: 'ficha_id', as: 'fichas' });

// Ref: usuario.aprendiz_id - aprendiz.id (uno a uno)
ModelUsuario.belongsTo(ModelAprendiz, { foreignKey: 'aprendiz_id', as: 'aprendiz' });
ModelAprendiz.hasOne(ModelUsuario, { foreignKey: 'aprendiz_id', as: 'usuario' });

// Ref: usuario.instructor_id - instructor.id (uno a uno)
ModelUsuario.belongsTo(ModelInstructor, { foreignKey: 'instructor_id', as: 'instructor' });
ModelInstructor.hasOne(ModelUsuario, { foreignKey: 'instructor_id', as: 'usuario' });

export {
  ModelPrograma,
  ModelFicha,
  ModelInstructor,
  ModelAprendiz,
  ModelRegistroIngreso,
  ModelUsuario,
  ModelFichaInstructor,
};
