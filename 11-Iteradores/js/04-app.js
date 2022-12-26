//while
let i = 0;
while (i < 10) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: fizz buzz`);
    continue;
  } else if (i % 5 === 0) {
    console.log(`${i}:buzz`);
    continue;
  } else if (i % 3 === 0) {
    console.log(`${i}:fizz`);
    continue;
  }
  i++;
}
