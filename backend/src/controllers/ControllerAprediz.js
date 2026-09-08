import { borrarAprendiz, consultarAprendizPorDocumento, listarAprendices, modificarAprendiz, registrarAprendiz } from "../services/ServiceAprendiz.js";

export function crear(req, res) {
    registrarAprendiz(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarAprendices()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function consultarPorDocumento(req, res) {
    consultarAprendizPorDocumento(req.params.numero_documento)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarAprendiz(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Aprendiz editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarAprendiz(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Aprendiz eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}