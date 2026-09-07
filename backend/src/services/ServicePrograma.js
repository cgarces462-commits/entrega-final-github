import {
    crearPrograma, obtenerPrograma, obtenerProgramaNombre, actualizarPrograma, eliminarPrograma
} from "../repositories/RepositoryPrograma.js";

export function registrarPrograma(data) {
    if (!data.nombre) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearPrograma(data)
}

export function listarProgramas() {
    return obtenerPrograma()
}

export function consultarProgramaNombre(nombre) {
    if (!nombre) {
        return Promise.reject(new Error("Nombre obligatorio..."))
    }
    return obtenerProgramaNombre(nombre)
}

export function modificarPrograma(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarPrograma(data, id)
}

export function borrarPrograma(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarPrograma(id)
}