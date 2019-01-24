       // ES5
 // Escribe tu código aquí....

 //  function findPairForSum(arr, sum) {
 //      //var sum = int;
 //      var num1 = arr[0];
 //      var num2;
 //      for (var i = 0; i < arr.length; i++) {
 //          num2 = sum - num1;
 //          //console.log(firstInt);
 //          if (arr.indexOf(num2) !== -1) {
 //              return [num1, num2];
 //          } else {
 //              num1 = arr[i];
 //          }
 //      }
 //  }
 //  console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));


 //Es6

 findPairForSum(arr, sum) => {
     //var sum = int;
     let num1 = arr[0];
     let num2;
     for (var i = 0; i < arr.length; i++) {
         num2 = sum - num1;
         //console.log(firstInt);
         if (arr.indexOf(num2) !== -1) {
             return [num1, num2];
         } else {
             num1 = arr[i];
         }
     }
 }
 console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));




