let zahl1 = 2;
let zahl2 = 2;
if(zahl1 == zahl2){
    console.log("true")
}


let zahl3 = 5;
if(zahl1 == zahl3){
    console.log("true");
}
else if(zahl1 < zahl3){
    console.log("zahl1 < zahl3");
}

let neueZahl1 = 5;
let neueZahl2 = 2;

if(neueZahl1 > 0){
    console.log("true");
}
if(neueZahl2 < 0 ){
    console.log("false")
}

if(neueZahl1 == neueZahl2){
    console.log("true")
}
else{
    console.log("false");
}

let inlineZahl = 5;
  (inlineZahl == 10) ? console.log("true") : console.log("false");
//Bedingung          ? Wahr-Anweisung      : Falsch-Anweisung



let variable = 3;
switch(variable){
    case 1:
        console.log(variable);
        break;
    case 2:
        console.log(variable);
        break;
    case 3:
        console.log(variable);
        break;
    default:
        console.log("default");
        break;
}


for(let i = 0; i < 10; i++){
    console.log(i);
}

let i = 0;
while(i < 10){
    let j = 0;
    j++;
    console.log(i);
    if(j == i){
        break;
    }
    i++;
}

loop1:
for(let i = 0; i < 10; i++){
    if(i == 2){
        for(let j = 0; j < 3; j++){
            if(j == 1){
                continue loop1;
            }
        }
    }
    console.log("loop" + i);
}