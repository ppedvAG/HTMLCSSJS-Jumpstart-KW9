{
    var x = 12; //Darf außerhalb des Code-Blocks verwendet werden
    var text = "Text";
    let y = 24; //Kann nicht außerhalb des Code-Blocks verwendet werden
    const z = 13; //Darf nicht geändert werden

    x += 2;
    //Ist gleich wie: 
    x = x + 2;

    x *= 2;
    x = x * 2;

    x /= 2;
    x = x / 2;

    x %= 2;
    x = x % 2;
}
console.log(x); //Wert wird in der Konsole ausgegeben
console.log(y);


//Der Gültigkeitsbereich Scope

let scriptScope = 3; //Ist im komplettem Skript verfügbar

function Function(){ //ALLE Variablen sind nur in der Funktion verfügbar
    let functionScope = 2;
    {
        let blockScope = 5; //Nur im Code-Block und in der Funktion verfügbar (ganz egal ob let oder var)
    }
}