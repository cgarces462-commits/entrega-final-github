import {
    borrarRegistroIngreso,
    consultarRegistroIngresoPorAprendiz,
    listarRegistrosIngreso,
    modificarRegistroIngreso,
    registrarRegistroIngreso
} from "../services/ServiceRegistroIngreso.js";

export function crear(req, res) {
    registrarRegistroIngreso(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarRegistrosIngreso()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function consultarPorAprendiz(req, res) {
    consultarRegistroIngresoPorAprendiz(req.params.aprendiz_id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarRegistroIngreso(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Registro de Ingreso editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarRegistroIngreso(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Registro de Ingreso eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}