/* eslint-disable no-unused-vars */
function countNumbers(el){
     let numEl = +(el.replace(/[^\d]/g, ''));
     if(numEl === 0){
          return '';
     }
     console.log(numEl)
     numEl = numEl + '';
     let arr=[];
     for(let i=0; i < numEl.length; i++){
          let char = numEl[i];
          let index = 0;
          let count=0;
          let n=0;
          while (n !== -1){
               n=numEl.indexOf(char,index);
               if(n !== -1){
                    count++;   
               }
               index=n+1;
          }
               arr[char] = count;
     }
     console.log(arr);
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 

