// 1. Importaciones

const Drone = require("./../models/Drone")

// Lista de los drones

exports.getAllDrones = async (req, res) => {
    const allDrones = await Drone.find({})

    res.render("drones/list", {
        data: allDrones
    })
}

// Crear un dron. Formulario.

exports.viewCreateDrone = async (req, res) => {
    res.render("drones/create")
}

// Crear un drone. Recibir datos.
exports.createDrone = async (req, res) => {

    console.log(req.body)

    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image

    const newDroneCreated = await Drone.create ({name, propellers, maxSpeed, image})

    console.log(newDroneCreated)

    res.redirect("drones")

    console.log("Datos recibidos")
}

// Editar un drone.

exports.viewEditDrone = async (req,res) => {

    const droneID = req.params.droneID
    const foundDrone = await Drone.findById(droneID)

    res.render("drones/edit", {
        data: foundDrone
    })
}

exports.editDrone = async (req, res) => {

    const droneID = req.params.droneID

    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image

    // findBy
    const updatedDrone = await Drone.findByIdAndUpdate(
        droneID, 
        {name, propellers, maxSpeed, image}, 
       {new:true}  
        )
    
    res.redirect("/drones")
}

exports.deleteDrone = async (req, res) => {

    const droneID = req.params.droneID

    const deletedDrone = await Drone.findByIdAndDelete(droneID)

    res.redirect("/drones")

}