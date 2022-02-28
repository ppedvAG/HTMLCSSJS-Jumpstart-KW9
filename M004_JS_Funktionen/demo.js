function Name(){

}

//Funktion mit Parametern
function Para(para1, para2){
    return para1;
}
let number = Para(1,2);

function Para1(para1 = 1){
    return para1;
}

//Immediatly invoked functions
console.log(function(a,b){return a + b}(1,2));

//Anonyme Funktion
let addieren = function(a,b){return a + b};

//Lambdafunktion
let sum = a => a+a;
console.log(sum(3));

let mehrzeilig = (a,b) => {
    a *= 2;
    b *= 2;
    return a + b;
}

//Von string zu int
let zahlString = "1";
let zahlInt = parseInt(zahlString);

//Extra
let string = prompt();
let zahl = parseInt(string);
/**/