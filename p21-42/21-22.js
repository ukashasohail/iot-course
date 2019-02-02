//ch21

var city="KarAchi";
console.log(city);

var city_lc = city.toLowerCase();
console.log(city_lc);

var city_uc = city.toUpperCase();
console.log(city_uc);

//ch22

var x = "KarachiIsTheLargestCityOfPakistan";
var y = x.slice(2,10); // will slice from 2nd index to 9th index
var z = x.slice(2); // will run from 2nd index to end

console.log(y,z);
console.log(x.length); // return the length of string