"use strict";
function sumMas(mas){ 
    let sum=0;
    for(let i=0; i<mas.length; i++){
        if(typeof(mas[i])=="number"){
           sum+=mas[i];
        }else if(Array.isArray(mas)){
            sum+=sumMas(mas[i]);
        }
    }
    return sum;
}

console.log(
    sumMas([ 5, 7, 
    [ 4, [2], 8,[1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ]));

  
