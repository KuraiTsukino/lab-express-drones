// 1. Importaciones

const express = require("express")
const router = express.Router()

const droneController = require("./../controllers/droneController")

// 2. Ruteo con base URL

// Creación de drones.
// Vista para el formulario
router.get("/create", droneController.viewCreateDrone)
// Crear libro, ruta para el formulario. Para recibir datos del formulario
router.post("/create", droneController.createDrone)

// Lectura de todos los drones.
router.get("/", droneController.getAllDrones)

// Editar un drone.
router.get("/drones/:droneID/edit", droneController.viewEditDrone)
router.post("/drones/:droneID/edit", droneController.editDrone)

//Borrar un drone.

router.post("drones/:droneID/delete", droneController.deleteDrone)

// 3. Exportación

module.exports = router