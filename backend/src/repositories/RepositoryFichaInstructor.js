import { ModelFichaInstructor } from "../models/ModelFichaInstructor.js";

export function crearFichaInstructor(data) {
    return ModelFichaInstructor.create(data)
}

export function obtenerFichaInstructor(data) {
    return ModelFichaInstructor.findAll(data)
}

export function obtenerFichaInstructorFichaId(ficha_id) {
    return ModelFichaInstructor.findAll({
        where: {ficha_id: ficha_id}
    })
}

export function obtenerFichaInstructorInstructorId(instructor_id) {
    return ModelFichaInstructor.findAll({
        where: {instructor_id: instructor_id}
    })
}

export function actualizarFichaInstructor(data, id) {
    return ModelFichaInstructor.update(data, {
        where: {id: id}
    })
}

export function eliminarFichaInstructor(id) {
    return ModelFichaInstructor.destroy({
        where: {id: id}
    })
}
