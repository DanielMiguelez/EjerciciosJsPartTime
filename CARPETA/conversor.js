function romanoAaNormal(numero) {
  const numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
  };


  
  let normal = 0;
  let valorPrevio = 0;

  for (let i = numero.length - 1; i >= 0; i--) {
    const actual = numerosRomanos[numero[i]];

    if (actual === undefined) {
      console.error("Número romano no válido");
    }

    if (actual < valorPrevio) {
      normal = normal - actual;
    } else {
      normal = normal + actual;
    }

    valorPrevio = actual;
  }
  if (normal > 100) {
    console.log("Número romano no puede ser mayor que 100");
  }
  return normal;
}

const resultado = romanoAaNormal('V');
console.log(resultado);




function arabicToRoman(num) {
  if (num <= 0 || num >= 4000) {
    return 'Número fuera de rango';
  }

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = '';

  for (const key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }

  return roman;
}

// Ejemplo de uso:
const numeroArabigo = 1987;
const numeroRomano = arabicToRoman(numeroArabigo);
console.log(numeroRomano); // Output: "MCMLXXXVII"
