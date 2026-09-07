import { ModelRegistroIngreso } from "../models/ModelRegistroIngreso.js";

export function crearRegistroIngreso(data) {
    return ModelRegistroIngreso.create(data)
}

export function obtenerRegistroIngreso(data) {
    return ModelRegistroIngreso.findAll(data)
}

export function obtenerRegistroIngresoAprendizId(aprendiz_id) {
    return ModelRegistroIngreso.findAll({
        where: {aprendiz_id: aprendiz_id}
    })
}

export function actualizarRegistroIngreso(data, id) {
    return ModelRegistroIngreso.update(data, {
        where: {id: id}
    })
}

export function eliminarRegistroIngreso(id) {
    return ModelRegistroIngreso.destroy({
        where: {id: id}
    })
}
