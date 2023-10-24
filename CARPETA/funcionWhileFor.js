/*function imprimePrimos(ini, fin) {
  for (let num = ini; num <= fin; num++) {
    let esPrimo = true;

    if (num <= 1) {
      esPrimo = false;
    } else if (num <= 3) {
      esPrimo = true;
    } else if (num % 2 == 0 || num % 3 == 0) {
      esPrimo = false;
    } else {
      let i = 5;
      while (i * i <= num) {
        if (num % i == 0 || num % (i + 2) === 0) {
          esPrimo = false;
          break;
        }
        i = i + 6;
      }
      if (esPrimo){
        console.log(num);
      }
    }
  }
}
imprimePrimos(1,20)*/