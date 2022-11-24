
const getHoraActual =   (req, res) => {

    const fecha = new Date()
    console.log(fecha)
    const horaActual = parseInt(fecha.getHours())
    console.log(horaActual)
    if(horaActual >= 6 && horaActual <= 12){
        res.json('Buenos dias!')
        // console.log('Buenos dias!')
    } 
    else if (horaActual >= 13 && horaActual <= 19){
        res.json('Buenas tardes!')
        // console.log('Buenas tardes')
    }       
    else {
        res.json('Buenas noches!')
        // console.log('Buenas noches')
    }        

}

const getNumeroRandom =  () => {

    const obj = {};

    for (let i = 0; i < 1000 ; i++) {
    const numero = Math.floor( Math.random() * 20);
    if (obj[numero]){
        obj[numero] =  obj[numero]+1;
    }else{
        obj[numero] = 1;
    }

    }
console.dir(obj);
}

const getOperacion =  (req, res) => {
      const num1      = parseInt(req.params.num1)
      const num2      = parseInt(req.params.num2)
      const operacion = req.params.operacion
  
      switch (operacion) {
          case 'suma':
              res.json({
                numero1: num1,
                numero2: num2,
                operacion: operacion,
                resultado: num1+num2
              })
              break;
          case 'resta':
            res.json({
                numero1: num1,
                numero2: num2,
                operacion: operacion,
                resultado: num1-num2
              })
              break;
          case 'multiplicación':
            res.json({
                numero1: num1,
                numero2: num2,
                operacion: operacion,
                resultado: num1*num2
              })
              break;
          case 'division':
            res.json({
                numero1: num1,
                numero2: num2,
                operacion: operacion,
                resultado: num1/num2
              })
              break;  
  
          default:
            res.json({
                error: {
                num1: { valor: num1, tipo: typeof num1 },
                num2: { valor: num2, tipo: typeof num2 },
                operacion: { valor: operacion, tipo: 'No exsite' }
                }
                })
              break;
      }
    }

export default {
    getNumeroRandom,
    getHoraActual,
    getOperacion
}