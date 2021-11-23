// Iteration #1

// 1. Importaciones.

const mongoose = require("mongoose")
const Drone = require("./../models/Drone.model")

require("dotenv").config()

// 2. Conexión a base de datos de manera independiente. 

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 3. Datos para poblar la base de datos.

const drones = [
    { 
        name: "Creeper XL 500", 
        propellers: 3, 
        maxSpeed: 12, 
        image: "https://dronerush.com/wp-content/uploads/2017/09/Atlas-Pro-InterDrone-DR-1024x576.jpg"
    },
    { 
        name: "Racer 57", 
        propellers: 4, 
        maxSpeed: 20, 
        image: "https://media.wired.com/photos/59264bb5f3e2356fd8008c6e/master/pass/DroneHP_GettyImages-599365398.jpg"
    },
    { 
        name: "Courier 3000i", 
        propellers: 6, 
        maxSpeed: 18,
        image: "https://fit.cvut.cz/zivot-na-fit/success-stories/2019/image-thumb__1203__Block1Image/2019-06-26-droni2.jpeg"
    }
  ];
  
// 4. Poblar la base de datos.

const createDronesDB = async () => {
    
    const newDrones = await Drone.create(drones)

    console.log(newDrones)

    //Cerrar conexión de base de datos.

    mongoose.connection.close()

}

createDronesDB()