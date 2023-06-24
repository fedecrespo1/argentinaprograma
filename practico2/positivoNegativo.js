const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingrese un numero: ');
    if (num>0)
        console.log('El numero es positivo.')
    else if (num==0)
        console.log('El numero es cero')
    else
        console.log('El numero es negativo')