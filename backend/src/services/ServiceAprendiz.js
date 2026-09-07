import {
    crearAprendiz, obtenerAprendiz, obtenerAprendizNumeroDocumento, actualizarAprendiz, eliminarAprendiz
} from "../repositories/RepositoryAprendiz.js";

export function registrarAprendiz(data) {
    if (!data.numero_documento) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearAprendiz(data)
}

export function listarAprendices() {
    return obtenerAprendiz()
}

export function consultarAprendizPorDocumento(numero_documento) {
    if (!numero_documento) {
        return Promise.reject(new Error("Número de documento obligatorio..."))
    }
    return obtenerAprendizNumeroDocumento(numero_documento)
}

export function modificarAprendiz(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarAprendiz(data, id)
}

export function borrarAprendiz(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarAprendiz(id)
}