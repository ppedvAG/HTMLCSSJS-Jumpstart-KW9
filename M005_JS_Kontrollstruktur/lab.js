function lotto(player1, player2, player3){
    let treffer = 0;

    for(let i = 0; i < 3; i++){
        let zufall = Math.floor(Math.random() * 20);
        if(zufall == player1 || zufall == player2 || zufall == player3){
            treffer++;
        }
    }

    console.log("Treffer: " + treffer);
}

function lotto2(){
    let random1;
    let random2;
    let random3;
    do{
        random1 = Math.floor(Math.random() * 20);
        random2 = Math.floor(Math.random() * 20);
        random3 = Math.floor(Math.random() * 20);
    }while(random1 == random2 || random2 == random3 || random1 == random2);
}