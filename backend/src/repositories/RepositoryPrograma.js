import { ModelPrograma } from "../models/ModelPrograma.js";

export function crearPrograma(data) {
    return ModelPrograma.create(data)
}

export function obtenerPrograma(data) {
    return ModelPrograma.findAll(data)
}

export function obtenerProgramaNombre(nombre) {
    return ModelPrograma.findAll({
        where: {nombre: nombre}
    })
}

export function actualizarPrograma(data, id) {
    return ModelPrograma.update(data, {
        where: {id: id}
    })
}

export function eliminarPrograma(id) {
    return ModelPrograma.destroy({
        where: {id: id}
    })
}
