// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

// ES5

// declara las variables ES5

//var array = [2, 4, 6];
//var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];

/*
// declaración de la funcion 

function square (arrayB) {
  // escribe tu código aqui...
  var doubles = arrayB.map(function(num) {
  if (num%2 === 0) {
    return Math.pow(num,2);
  } else return num
  });
  console.log(doubles);
}
console.log(square(array));    */

//  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)
//let array = [2, 4, 6];
let array = [-3, 2, -8, 12, 5];
// let array = [1, 2, 3, 4, 5];

// declara la funcion y ejecuta el código
const doubles = array.map(function(num) {
    if (num % 2 === 0) {
        return Math.pow(num, 2);
    } else return num
    console.log(num);
});

// ejecuta la funcion 
console.log(doubles);



// ejecuta la funcion

