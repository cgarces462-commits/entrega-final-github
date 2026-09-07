import { ModelFicha } from "../models/ModelFicha.js";

export function crearFicha(data) {
    return ModelFicha.create(data)
}

export function obtenerFicha(data) {
    return ModelFicha.findAll(data)
}

export function obtenerFichaNumeroFicha(numero_ficha) {
    return ModelFicha.findAll({
        where: {numero_ficha: numero_ficha}
    })
}

export function actualizarFicha(data, id) {
    return ModelFicha.update(data, {
        where: {id: id}
    })
}

export function eliminarFicha(id) {
    return ModelFicha.destroy({
        where: {id: id}
    })
}
