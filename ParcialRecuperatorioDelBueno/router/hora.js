import express from 'express'
import controller from '../controller/hora.js'



const router = express.Router()


// //  -------- GET clientes ----------
router.get('/', controller.getHoraActual)

//  -------- GET RANDOM ----------
router.get('/random', controller.getNumeroRandom)

// //  -------- GET operaciones, ----------
router.get('/operaciones/:num1/:num2/:operacion', controller.getOperacion)




export default router