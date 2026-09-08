import {
    borrarPrograma,
    consultarProgramaNombre,
    listarProgramas,
    modificarPrograma,
    registrarPrograma
} from "../services/ServicePrograma.js";

export function crear(req, res) {
    registrarPrograma(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarProgramas()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function consultarPorNombre(req, res) {
    consultarProgramaNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarPrograma(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Programa editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarPrograma(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Programa eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}