import {
    borrarInstructor, consultarInstructorEmail,
    listarInstructores, modificarInstructor,
    registrarInstructor
} from "../services/ServiceInstructor.js";

export function crear(req, res) {
    registrarInstructor(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarInstructores()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function consultarPorEmail(req, res) {
    consultarInstructorEmail(req.params.email)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarInstructor(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Instructor editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarInstructor(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Instructor eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}