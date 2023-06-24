const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingrese el numero del mes: ');
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
console.log('La cantidad de dias del mes de', meses[num-1], 'es', dias[num-1])