// JavaScript Date
const myDate = new Date();


 //console.log(myDate);
// console.log(typeof myDate);

// console.log(myDate.toString()); // for node terminal

//console.log(myDate.toDateString);
//console.log(myDate.toLocaleString);

// console.log(myDate.toLocaleString('default', {
//     weekday: 'long'
// }));

let updateDate = new Date(2025, 2, 14)
console.log(updateDate);

let updateDate2 = new Date(2025, 2, 14, 11, 40)
console.log(updateDate2);

let updateDate3 = new Date('03-12-1995')
console.log(updateDate3);

let myTime = Date.now();
// console.log(myTime);

/*function simpleTask() {
    for (let step = 0; step < 10000; step++) {
        console.log('walking east to one step');
    }
}
let startTime = Date.now();
simpleTask();
let endTime = Date.now();
console.log(`The tast took ${endTime - startTime} 
    millisecond to complete`);
    */

// console.log(myTime / 1000);
   console.log(Math.floor(myTime / 1000)) ;

   console.log(myDate.getMinutes());