const metodoPago = 'efectivo';
switch (metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`Pagaste con  ${metodoPago}`)
        default: console.log('Aun no seleccionaste tu metodo de pago o un metodo no es soportado')
}