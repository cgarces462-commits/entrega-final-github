import {
    crearFichaInstructor, obtenerFichaInstructor, obtenerFichaInstructorFichaId,
    obtenerFichaInstructorInstructorId, actualizarFichaInstructor, eliminarFichaInstructor
} from "../repositories/RepositoryFichaInstructor.js";

export function registrarFichaInstructor(data) {
    if (!data.ficha_id || !data.instructor_id) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearFichaInstructor(data)
}

export function listarFichaInstructor() {
    return obtenerFichaInstructor()
}

export function consultarFichaInstructorPorFicha(ficha_id) {
    if (!ficha_id) {
        return Promise.reject(new Error("El ID de la ficha es obligatorio..."))
    }
    return obtenerFichaInstructorFichaId(ficha_id)
}

export function consultarFichaInstructorPorInstructor(instructor_id) {
    if (!instructor_id) {
        return Promise.reject(new Error("El ID del instructor es obligatorio..."))
    }
    return obtenerFichaInstructorInstructorId(instructor_id)
}

export function modificarFichaInstructor(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarFichaInstructor(data, id)
}

export function borrarFichaInstructor(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarFichaInstructor(id)
}