import express from 'express'
import routerHora from './router/hora.js'



const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//  ------------------------------------

//  ZONA DE RUTAS MANEJADAS POR EL ROUTER

//  ------------------------------------


app.use('/hora', routerHora)



const PORT = 8080 
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

