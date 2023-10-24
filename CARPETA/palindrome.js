/*function isPalindrome(phrase,ignoreSpaces,ignoreCase,ignoreAccents) {

  if (ignoreSpaces) {
    phrase = phrase.replace(/\s/g,'');
  }

  if (ignoreCase) {
    phrase = phrase.toLowerCase();
  }

  if (ignoreAccents) {
    const accents = 'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ';
    const withoutAccents = 'AAAAAACEEEEIIIINOOOOOUUUU';

    for (let i = 0; i < accents.length; i++) {
      phrase = phrase.replace(
        new RegExp(accents.charAt(i), "g"),
        withoutAccents.charAt(i)
      );
    }
  }

  const reversedPhrase = phrase.split('').reverse().join('');
  return phrase === reversedPhrase;
}


console.log(isPalindrome('anilina')); 

console.log(isPalindrome('La ana aL')); 

console.log(isPalindrome('Hola, mundo')); */
