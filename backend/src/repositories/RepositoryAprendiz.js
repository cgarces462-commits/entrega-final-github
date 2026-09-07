import { ModelAprendiz } from "../models/ModelAprendiz.js";

export function crearAprendiz(data) {
    return ModelAprendiz.create(data)
}

export function obtenerAprendiz(data) {
    return ModelAprendiz.findAll(data)
}

export function obtenerAprendizNumeroDocumento(numero_documento) {
    return ModelAprendiz.findAll({
        where: {numero_documento: numero_documento}
    })
}

export function actualizarAprendiz(data, id) {
    return ModelAprendiz.update(data, {
        where: {id: id}
    })
}

export function eliminarAprendiz(id) {
    return ModelAprendiz.destroy({
        where: {id: id}
    })
}
