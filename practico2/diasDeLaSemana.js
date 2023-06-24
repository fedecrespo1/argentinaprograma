const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingresa un numero del 1 al 7: ');
let dia
switch (num) {
    case '1':
       dia='lunes'
    break;
    case '2':
        dia=' martes'
        break;
    case '3':
        dia='miercoles'
    break;
    case '4':
        dia='jueves'
    break;
    case '5':
        dia='viernes'
    break;
    case '6':
        dia='sabado'
    break;
    case '7':
        dia='domingo'
    break;
    default:
        console.log('Numero invalido')
                }
    console.log('Hoy es',dia);