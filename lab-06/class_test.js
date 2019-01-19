var x=5;

function f(){
    var x=6;
    return(x);
}

console.log(f())

///
var exp = function() {
    console.log("this is anonymous function")
}

exp()

//////

var exp2 = ()=>{
    console.log("this is arrow functions")
}

exp2();