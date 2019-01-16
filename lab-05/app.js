// var arrch=[["eng","math","sci"],["eng","math","sci"],["eng","math","sci"]];

// for(var i=0;i<3;i++){
//     console.log("class "+(i+1)+" subjects");
//     for(var j=0;j<3;j++){

//         console.log(arrch[i][j]);
//     }
//     console.log("\n");
// }

var arrc=[[],[],[],[],[],[],[],[],[],[]];
var countclass=prompt("how many classes?");
var countsubject=prompt("how many subjects?");

for(var i=0;i<countclass;i++){
    for(var j=0;j<countsubject;j++){
        arrc[i][j]=prompt("enter subject name of class:"+(i+1)+"and subject number"+(j+1));

    }
}

for(var i=0;i<countclass;i++){
    console.log("class"+(i+1)+"subjects");
    for(var j=0;j<countsubject;j++){
        console.log(arrc[i][j]);
    }
    console.log("\n")
}

