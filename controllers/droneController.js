// Importación de modelo de Book.

const Drone = require("./../models/Drone.model")

exports.getAllDrones = async (req, res) => {
    
    const allDrones = await Drone.find({})

    console.log(allDrones)

    res.render("drones/list", {
        data: allDrones
    })

}

exports.getBook = async (req, res) => {

    const singleBookID = req.params.bookID

    const getTheBook = await Book.findById(singleBookID)

    // getTheBook es un objeto
    //console.log(getTheBook)

    res.render("books/single", {
        data: getTheBook
    })
}

exports.viewCreateBook = async (req, res) => {
    res.render("books/create")
}

exports.createBook = async (req, res) => {

    console.log(req.body)

    const title = req.body.title
    const author = req.body.author
    const description = req.body.description
    const rating = req.body.rating

    const newBookCreated = await Book.create ({title, author, description, rating})

    console.log(newBookCreated)

    res.redirect("/books")

    console.log("Datos recibidos")
}

exports.viewEditBook = async (req,res) => {
    console.log(req.params)

    const bookID = req.params.bookID
    const foundBook = await Book.findById(bookID)

    console.log(foundBook) // dato del libro encontrado
    // va a pasar el id por el res.render
    res.render("books/edit", {
        data: foundBook
    })
}

exports.editBook = async (req, res) => {
    // Se necesitan dos datos para editar 
    // 1. El ID del libro
    const bookID = req.params.bookID
    
    // 2. Los nuevos cambios del formulario de editar

    const title = req.body.title
    const description = req.body.description
    const author = req.body.author
    const rating = req.body.rating

    console.log(bookID)
    console.log(title, description, author, rating)
    // 3. Realizar la actualización de datos de la base de datos

    // findBy
    const updatedBook = await Book.findByIdAndUpdate(
        bookID, // ID del documento
        {title, description, author, rating}, 
       {new:true} // devuelve a la variable el valor actualizado. 
        )
    
    console.log(updatedBook)

    res.redirect(`/books/${updatedBook._id}`)
}

exports.deleteBook = async (req, res) => {
    // 1. Identificar el libro que quiero borrar.

    const bookID = req.params.bookID

    // 2. Realizar borrado en base de datos

    const deletedBook = await Book.findByIdAndDelete(bookID)

    console.log(deletedBook)

    // 3. Redirección
    res.redirect("/books")

}