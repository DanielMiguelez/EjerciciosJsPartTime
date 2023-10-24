
/*const billetes = [500, 200, 50, 20, 5, 2, 1];

function cajero(dineroRetirable){
  console.log('dinero a retirar ' + dineroRetirable);

  for(i=0; i< billetes.length; i++){
    const billete = billetes[i];

    if(dineroRetirable >= billete){
      dineroRetirable = dineroRetirable - billete;
     billete > 2 ? console.log(`|${billete} €|`) : console.log(`(${billete} €)`);
     i--;
    }
  }

  
}
cajero(1487)*/

//--------------------------------------------BILLETES 2 -------------------------------------------

/*const billetes = [500, 200, 50, 20, 5, 2, 1];
const maxCoin = 2;

function getFreshMoney(myMoney) {
  for (let i = 0; i < billetes.length; i++) {
    const billete = billetes[i];
  }
  if (myMoney >= billete) {
    billete > maxCoin
      ? console.log(`|${billete} €|`)
      : console.log(`(${billete} €)`);
    myMoney = myMoney - billete;
    if (myMoney >= billete) {
      i--;
    }
  }
}
const myMoney = 1498;

getFreshMoney(myMoney);*/


//------------------------------------------EJERCICIO RIO -------------------------------

/*const capacidad = 2;
const personas = ['P1', 'P2', 'P3', 'P4', 'P5'];
const viajandoBarca = [];

function cruzar(){
  while(personas.length > 0){
    for(let i = 0; i < capacidad && personas.length >0; i++){
      const persona = personas.pop();
      viajandoBarca.push(persona);
      console.log('${persona} sube a barca');
    }
    console.log('barca cruza el rio..');

    while(viajandoBarca.length>0){
      const persona = viajandoBarca.pop();
      console.log(`Bajando a ${persona}del barco`)
    }
  }
  console.log('Todos han cruzado')
}

cruzar();*/

//.POP() Modifica el array original y devuelve valor
//Push  devuelve la longitud del array
// join, no modifica array original, quikta comas del array y todo en una.
//shift quita primer elemento y lo devuelve
//includes , dice si un arraay lo incluye

// copia y aplica cambios, map modifica array original en base a lo que le pases
//find busca en array orig, devuelve el primer valor

//filter te saca todos

//findIndex devuelve posicion del primero que cumple posicioin

