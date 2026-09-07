import { crearUsuario, obtenerUsuario, eliminarUsuario, actualizarUsuario, obtenerUsuarioEmail } from "../repositories/RepositoryUsuario.js";

export function registrarUsuario(data) {
    if (!data.correo || !data.nombre || !data.apellido || !data.contrasena) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearUsuario(data)
}

export function listarUsaurios() {
    return obtenerUsuarios()
}

export function modificarUsuario(data, id) {
    if (!id) {
        return new Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarUsuario(data, id)
}

export function borrarUsuario(id) {
    if (!id) {
        return new Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarUsuario(id)
}

export function consultarUsuarioCorreo(correo) {
    if (!correo) {
        return new Promise.reject(new Error("Correo obligatorio..."))
    }
    return obtenerUsuarioCorreo(correo)
}