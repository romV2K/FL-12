function isLeapYear(date) {
     let year = 0;
     if(Number.isInteger(date)) {
          year = new Date(date).getFullYear();
     }else if(Date.parse(date, "yyyy-MM-dd HH:mm:ss")){
          year = +date.substring(0, 4);
     }
     if(year){
          if(year % 4 === 0) {
               if(year%100 === 0) {
                    if(year%400 === 0) {
                         return year + " is a leap year";
                    }else{
                         return year + " is not a leap year";
                    }
                    
               }else{
                    return year + " is a leap year";
               }
          }
          return year + " is not a leap year";
     }else{
          return "Invalid Date";
     }
}

console.log(isLeapYear('2020-01-01 00:00:00')); 
console.log(isLeapYear('2020-01-01 00:00:00777')); 
console.log(isLeapYear('2021-01-15 13:00:00'));  
console.log(isLeapYear('2200-01-15 13:00:00')); 
console.log(isLeapYear(1213131313135465656654564646542132132131)); 
console.log(isLeapYear(1213131313)); 
