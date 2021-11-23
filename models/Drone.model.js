// Iteration #1

// 1. Importaciones.

const mongoose = require("mongoose")

// 2. Schema
// Requisitos para crear un libro.

const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
    image: String
}, {timestamps: true })

// 3. Generación de modelo.

const Drone = mongoose.model("Drone", droneSchema)

// 4. Exportación.

module.exports = Drone