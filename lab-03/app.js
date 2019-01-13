// var x=100;
// if (x>=90)
// {
//     console.log("Greater than 90");
// }
// else if (x>=70)
// {
//     console.log("Greater than 70");
// }

var cities = ["KHI","LHR",'ISL',"QTA","PSH"];

// console.log(cities[4])
cities.pop();
console.log(cities);

cities.push('HELLO');
console.log(cities);

cities.shift();
console.log(cities);

cities.unshift("WAKANDA");
console.log(cities);

cities[2]="NEW ELEMENT";
console.log(cities);

cities.splice(1,2,"MUL")
console.log(cities)

var abc = "UKASHA";
b=abc.slice(2,4);
console.log(b);

var a= cities.slice(1,2);
console.log(a);

var cleanest_cities = ["KHI",'ISL','LHR']

var usr_input = "LHR"

for i in cleanest_cities{
    if usr_input=cleanest_cities[i]
    console.log("ok")
}


