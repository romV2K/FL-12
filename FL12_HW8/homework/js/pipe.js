function addOne(x){
     return x+1;
}

function pipe(...x){
     let res = x[0];
     for(let i = 1; i<x.length; i++){
          res = x[i](res);
     }
     return res;
}

let res = pipe(1, addOne);
console.log(res);

let res2 = pipe(1, addOne, addOne);
console.log(res2);