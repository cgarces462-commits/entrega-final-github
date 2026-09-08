import {
    borrarFichaInstructor,
    consultarFichaInstructorPorFicha,
    consultarFichaInstructorPorInstructor,
    listarFichaInstructor,
    modificarFichaInstructor,
    registrarFichaInstructor
} from "../services/ServiceFichaInstructor.js";

export function crear(req, res) {
    registrarFichaInstructor(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarFichaInstructor()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function consultarPorFicha(req, res) {
    consultarFichaInstructorPorFicha(req.params.ficha_id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function consultarPorInstructor(req, res) {
    consultarFichaInstructorPorInstructor(req.params.instructor_id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarFichaInstructor(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Ficha Instructor editada de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarFichaInstructor(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Ficha Instructor eliminada de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}