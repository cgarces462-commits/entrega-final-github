import {
    crearRegistroIngreso, obtenerRegistroIngreso, obtenerRegistroIngresoAprendizId,
    actualizarRegistroIngreso, eliminarRegistroIngreso
} from "../repositories/RepositoryRegistroIngreso.js";

export function registrarRegistroIngreso(data) {
    if (!data.aprendiz_id) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearRegistroIngreso(data)
}

export function listarRegistrosIngreso() {
    return obtenerRegistroIngreso()
}

export function consultarRegistroIngresoPorAprendiz(aprendiz_id) {
    if (!aprendiz_id) {
        return Promise.reject(new Error("El ID del aprendiz es obligatorio..."))
    }
    return obtenerRegistroIngresoAprendizId(aprendiz_id)
}

export function modificarRegistroIngreso(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarRegistroIngreso(data, id)
}

export function borrarRegistroIngreso(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarRegistroIngreso(id)
}