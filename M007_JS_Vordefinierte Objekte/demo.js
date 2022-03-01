//Array
let arr = [1, 2, 3,4,5,6,7,8,9];
let arr1 = [4,5,6];
let arr2 = new Array(1,2,2);
arr[1];
arr.indexOf(1,1);
arr.concat(arr1);
arr.pop();


//String
let string = ["string1", "string2"];
let text = "Hallo guten Tag";
/*Bei String gelten auch einige Methoden wie bei Array, wie zB indexOf oder lastIndexOf. Anstelle davon befinden sich der Buchstabe im Index. */
text.toLowerCase(); //String wird kleingeschrieben
text.toUpperCase(); //String wird großschrieben
text.slice(/*Start */, /*Ende */); //Gibt den Teil des String(von Start bis Ende in Form vom Index) ohne Ende zurück



//Math
Math.E; //Eulerische Zahl
Math.LN2 //Natürlicher Logarithmus von 2
Math.LN10 //Natürlicher Logarithmus von 10
Math.PI 
Math.SQRT2 //Quadratwurzel von 2


//Number
let variable;
Number.isNaN(variable); //Prüft, ob die Variable NaN ist
Number.isInteger(variable); //Prüft, ob die Zahl ganzzahlig ist
Number.parseInt(variable); //Gibt ie Eingabe als Integer zurück


//Date
/*
Erstellung
var date = new Date()
var date = new Date(jahr, monat, tag, stunden, minuten, sekunden, millisekunden)
var date = new Date(millisekunden);
var date = new Date(datumString);
 */

//Methoden
///get
var date = new Date();
date.getFullYear(); //Gibt das Jahr als vierstellige Zahl zurück
date.getMonth(); //Gibt den Monat als Zahl zwischen 0 und 11 zurück
date.getDate(); //Gibt den Tag als Zahl zwischen 1 und 31 zurück
date.getDay(); //Gibt den Wochentag als Zahl zwischen 0 und 6 zurück

///set
date.setDate();
date.setFullYear();
date.setHours();
date.setMinutes();
date.setMonth();
//Es existieren auch lauter andere Methoden! Die sind also nicht die einzigen.
