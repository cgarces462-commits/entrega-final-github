import {
    crearFicha, obtenerFicha, obtenerFichaNumeroFicha, actualizarFicha, eliminarFicha
} from "../repositories/RepositoryFicha";

export function registrarFicha(data) {
    if (!data.numero_ficha) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearFicha(data)
}

export function listarFichas() {
    return obtenerFicha()
}

export function consultarFichaNumero(numero_ficha) {
    if (!numero_ficha) {
        return Promise.reject(new Error("Número de ficha obligatorio..."))
    }
    return obtenerFichaNumeroFicha(numero_ficha)
}

export function modificarFicha(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarFicha(data, id)
}

export function borrarFicha(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarFicha(id)
}