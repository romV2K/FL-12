function makeNumber(el){
     let numEl = +(el.replace(/[^\d]/g, ''));
     if(numEl === 0){
          return '';
     }
     return numEl;
}
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 

