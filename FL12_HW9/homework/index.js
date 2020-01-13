/* eslint-disable no-magic-numbers */
// Your code goes here
// Task 1
function convert(arr){
     let arr2=[];
     let str = 0;
     let num = 0;
     for(let i=0; i < arr.length; i++){ 
          if(typeof arr[i]==='string' || arr[i] instanceof String ){
               str = +arr[i];
               arr2.push(str);
          }else if(typeof arr[i]==='number' || arr[i] instanceof Number ){
               num = arr[i] + '';
               arr2.push(num);
          }
}
}
// Task 2
function itemFunction(el){
     console.log(el*2)
}
function executeforEach(items, callback){
     for (let item of items) {
          callback(item);
     }
}
//Task 3
function anotherFunction(el){
     console.log(el + 3) ;
}
function mapArray(arr, anotherFunction){
     const result=[];
     executeforEach(arr, (item) => result.push(anotherFunction(+item)));
     return result;
}
//task 4
function anotherFunction2(el){
     return el % 2 === 0 ;
}
function filterArray(arr, anotherFunction2) {
     const result = [];
     executeforEach(arr, (item) => anotherFunction2(item) ? result.push(item) : 0);
     return result;
}

//Task 5
function flipOver(str) {
     let str2 = '';
     for (let i = str.length - 1; i >= 0; i--) { 
          str2 += str[i];
     }
     return str2; 
} 
//Task 6
function makeListFromRange(arr) {
     let result = [];
     for (let i = arr[0]; i <= arr[1]; i++) {
          result.push(i);
     }
     return result;
}
//Task 7
function getArrayOfKeys(item, prmt){
     let result = [];
     executeforEach(item, function (el){
          result.push(el[prmt]);
     });
     return result;
}
const actors = [
     {name: 'tommy',age: 36},
     {name: 'lee', age: 28}
];
//task 8
function substitute(arr){
     return mapArray(arr, function (el) {
          if (el<30){
               return `*`;
          }else{
               return el;
          }
     })
}
//task9
function getPastDay(date, pDay) {
     let dMilliseconds = 86400000;
     let day = dMilliseconds*pDay;
     let preResult = date - day;
     let result = new Date(preResult);
     return result.getDate();
}
let date = new Date(2019, 0, 2);
//task10
function formatDate(date) {
     let year = date.getFullYear();
     let month = date.getMonth();
     let day = date.getDate();
     let hour = date.getHours();
     let minute = date.getMinutes();
     let result = `${year}/${month+1}/${day} ${hour}:${minute}`;
     return result;
}