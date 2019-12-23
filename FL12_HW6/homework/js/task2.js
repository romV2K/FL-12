// Your code goes here
let a = +prompt('Enter the coordinate A');
let b = +prompt('Enter the coordinate B');
let c = +prompt('Enter the coordinate C');
if(a<=0 || b<=0 || c<=0){
     alert('A triangle must have 3 sides with a positive definite length')
}
if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
     if(a + b > c && a + c > b && b + c > a){
          if(a === b && b === c){
               console.log('Eequivalent triangle');
          }else if(a === b || b === c || a === c){
               console.log('Isosceles triangle');
          }else if(a !== b || b !== c || a !== c){
               console.log('Scalene triangle');
          }else{
               console.log('Normal triangle');
          }
     }else{
          alert('Triangle doesn’t exist');
          console.log('Triangle doesn’t exist');
     }
}else{
     alert('input values should be ONLY numbers');
}
