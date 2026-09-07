import { ModelInstructor } from "../models/ModelInstructor.js";

export function crearInstructor(data) {
    return ModelInstructor.create(data)
}

export function obtenerInstructor(data) {
    return ModelInstructor.findAll(data)
}

export function obtenerInstructorEmail(email) {
    return ModelInstructor.findAll({
        where: {email: email}
    })
}

export function actualizarInstructor(data, id) {
    return ModelInstructor.update(data, {
        where: {id: id}
    })
}

export function eliminarInstructor(id) {
    return ModelInstructor.destroy({
        where: {id: id}
    })
}
