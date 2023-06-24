const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingrese un numero entero: ');
    if (num>0) 
        if ( num%2 == 0 )
        console.log('El numero es positivo y par')
        else
        console.log('El numero es positivo e impar')
    else if (num<0)
        console.log('El numero es negativo')
    else
        console.log('El numero es cero')