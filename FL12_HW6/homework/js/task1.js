/* eslint-disable no-magic-numbers */
// Your code goes here
     let a = +prompt('please enter a');
     let b = +prompt('please enter b');
     let c = +prompt('please enter c');
     if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
          let D = b * b - 4 * a * c;
          console.log('Discriminant = ', D)
          let x1 = (- b + Math.sqrt(D)) / 2 * a;
          let x2 = (- b - Math.sqrt(D)) / 2 * a;
          if(D < 0){
               console.log('no solution')
          }else{
               console.log('x1 = ', x1, 'x2= ', x2)
          }
     }else{
          console.log('Invalid input data')
     }
