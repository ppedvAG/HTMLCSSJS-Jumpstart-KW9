let random = Math.floor(Math.random() * 20);

function spielen(){
    let player = deineMurmeln();
    let random = gegnerMurmeln();
}

function deineMurmeln(zahl1,zahl2,zahl3){
    return (zahl1 + zahl2 + zahl3);
}

function gegnerMurmeln(){
    let random1 = Math.floor(Math.round() * 20);
    let random2 = Math.floor(Math.round() * 20);
    let random3 = Math.floor(Math.round() * 20);
    return (random1 + random2 + random3);
}