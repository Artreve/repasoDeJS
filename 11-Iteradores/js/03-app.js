//reto del fizz buzz
//numero del 0 al 100, los multiplos de 3 deben imprimir 'fizz
//los multiplos de 5 deben imprimir buzz
//y los multiplos de 3 y 5 deben imprimir fizz y buzz
for (let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i % 5=== 0){
        console.log(`${i}: fizz buzz`)
        continue
    }else if(i % 5 === 0){
        console.log(`${i}:buzz`)
        continue
    }else if(i % 3 === 0){
        console.log(`${i}:fizz`)
        continue;
    }
    
}