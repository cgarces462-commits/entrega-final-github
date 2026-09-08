import { borrarFicha, consultarFichaNumero, listarFichas, modificarFicha, registrarFicha } from "../services/ServiceFicha.js";

export function crear(req, res) {
    registrarFicha(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarFichas()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function consultarPorNumero(req, res) {
    consultarFichaNumero(req.params.numero_ficha)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarFicha(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Ficha editada de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarFicha(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Ficha eliminada de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}