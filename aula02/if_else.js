//driver = 110km/h
//se o motorista está acima de 110km/h - notificado
//se ele estiver entre 40 e 110 - aceito
//se ele estiver abaixo de 40 - muito devagar

let driverSpeed = 120
//speedMaxRoad = 110

if (driverSpeed > 110) {
    console.log('Driving too fast')
}

else if (driverSpeed > 40 && driverSpeed<=110){
    console.log('OK')
}

//else if - pode  acrescentar mais.

else 
    console.log('Driving too slow')

//sempre começar com if e terminar com else.