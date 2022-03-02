/*
Wir sind auf einer Shoppingseite und wollen gerne etwas in unserem Warenkorb Produkte hinzufügen und 
entfernen.
Der Warenkorb soll ein leerer Array sein, während die Produkte Objekte sind.
Für die Objekte soll ein Konstruktur verwendet werden, in dem folgende Eigenschaften übergeben werden:
- ProduktID
- ProduktName
- ProduktPreis

- Erstellen Sie zwei verschiedene Produkte mithilfe des Konstrukturs
- Fügen Sie die Objekte in den Warrenkorb hinzu. Dafür erstellen Sie eine Funktion, dessen Parameter der Objektname sein soll.
- Entfernen Sie das letzte Produkt im Warenkorb. Dafür erstellen Sie ein Funktion.
- 
 */

function Produkt(produktID){
    this.Produktid = produktID;
}




let warrenkorb = [];

function Produkt(produktID, produktName, produktPreis){
    this.ProduktID = produktID;
    this.ProduktName = produktName;
    this.ProduktPreis = produktPreis;
}
const Buch = new Produkt(1,"Buch",10);
const Spiel = new Produkt(2,"Spiel",40);
const Fernseher = new Produkt(3,"Fernseher",90);

function add(object){
    warrenkorb.push(object);
}

function removeLast(){
    warrenkorb.pop();
}
