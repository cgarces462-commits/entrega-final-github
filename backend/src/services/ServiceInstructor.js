import {
    crearInstructor, obtenerInstructor, eliminarInstructor, actualizarInstructor, obtenerInstructorEmail
} from "../repositories/RepositoryInstructor.js";

export function registrarInstructor(data) {
    if (!data.email) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearInstructor(data)
}

export function listarInstructores() {
    return obtenerInstructor()
}

export function modificarInstructor(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarInstructor(data, id)
}

export function borrarInstructor(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarInstructor(id)
}

export function consultarInstructorEmail(email) {
    if (!email) {
        return Promise.reject(new Error("Email obligatorio..."))
    }
    return obtenerInstructorEmail(email)
}