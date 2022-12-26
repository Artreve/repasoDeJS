//while
let i = 0;
while (i < 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: fizz buzz`);
    //porque cuando ponemos continue en el while lo hace ciclo infinito?
  } else if (i % 5 === 0) {
    console.log(`${i}:buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}:fizz`);
  }
  i++;
}
