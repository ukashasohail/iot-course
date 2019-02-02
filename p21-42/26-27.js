//ch26

arr =[20.4,20.5,20.6,24,25,26,0,0.1,0.9,-1.5,-2.5,-1.4,-1.6];

var i;

for (i = 0; i < arr.length; i++) { 
    number = Math.round(arr[i]);
    console.log(number);
  }

console.log(Math.ceil(0.000001));
console.log(Math.ceil(0.999999));
console.log(Math.ceil(-1.6));


console.log(Math.floor(0.000001));
console.log(Math.floor(0.999999));
console.log(Math.floor(-1.6));

//ch27

var random_number = Math.random();
console.log(random_number);
