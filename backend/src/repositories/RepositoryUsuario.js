import { ModelUsuario } from "../models/ModelUsuario.js";

export function crearUsuario(data) {
    return ModelUsuario.create(data)
}

export function obtenerUsuario(data) {
    return ModelUsuario.findAll(data)
}

export function obtenerUsuarioEmail(email) {
    return ModelUsuario.findAll({
        where: {email: email}
    })
}

export function actualizarUsuario(data, id) {
    return ModelUsuario.update(data, {
        where: {id: id}
    })
}

export function eliminarUsuario(id) {
    return ModelUsuario.destroy({
        where: {id: id}
    })
}
