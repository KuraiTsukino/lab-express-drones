// 1. Importaciones

const express = require("express")
const router = express.Router()
const indexController = require("./../controllers/indexController")

// 2. Rutas de la URL base
router.get("/", indexController.home)

// 3. Exportaciones

module.exports = router