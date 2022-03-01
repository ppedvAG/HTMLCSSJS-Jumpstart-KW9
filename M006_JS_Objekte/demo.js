
//literale Definition
const objekt = {Name: "Max Mustermann", Alter: 23};
objekt.Name = "Tina Testfrau";

//new Object()
const objekt1 = new Object();
objekt1.prop1 = 1234;
objekt1.prop2 = "Hallo";

//Shorthand
let name = "Max Mustermann";
let alter = 23;
let person = {Name: name};

//Konstruktoren
function Person(Name, Alter, Ort){
    this.Name = Name;
    this.Alter = Alter;
    this.Ort = Ort;
    this.Jahr = GiveYear();
}
let Person1 = new Person("Tina Testfrau", 25, "Burghausen");
let Person2 = new Person("Max Mustermann", 25, "Burghausen");

//Dynamic Props
///Neue Eigenschaft hinzufügen
objekt.Ort = "Burghausen";
Person2.Email = "maxmustermann@email.de";

///Eigenschaft löschen
delete Person1.Alter;

//Methoden
function GiveYear(){
    this.Jahr = !this.Jahr;
}

//for...in
for(eigenschaft in Person1){
    console.log("Name: " + eigenschaft, ", Wert: " + Person2[eigenschaft]);
}

let variable = 2;
if(variable == 2){

}
if("Name" in Person2){
    console.log("true");
}

//this
Person2["Jahr"];
Person2.Jahr;


class newPerson{
    constructor (Name, Alter, Ort){
        this.Name = Name;
        this.Alter = Alter;
        this.Ort = Ort;
        this.Jahr = GiveYear();
    }
    StartStop(){}
}
var p = new newPerson();
p.Alter = 34;
p.StartStop();