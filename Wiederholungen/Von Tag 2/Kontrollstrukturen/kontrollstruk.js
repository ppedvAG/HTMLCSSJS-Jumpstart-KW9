/*
Wir wollen uns auf einer Seite einloggen und wollen ein Username und Passwort eingeben.
Erstellen Sie ein Objekt, was genau diese Eigenschaften beinhaltet: Benutzer: user und Passwort: 1234.
Verwenden Sie eine do-while-Schleife und greifen Sie auf die Eigenschaften zu.
Nach der Eingabe der Zugangsdaten (durch prompt) soll am Ende der Schleife geprüft werden,
ob der eingegebene Username UND Passwort den gleichen Wert haben wie die Eigenschaften in unserem Objekt.
Dem User soll, nach der Schleife, mitgeteilt werden, dass der Login erfolgreich war.

Bei falscher Eingabe einer der Benutzerdaten oder bei allen Benutzerdaten soll es dem User dementsprechend vor Ende der Schleife mitgeteilt werden.
*/































const User = {Username: "user", Passwort: 1234};
let username;
let password;

do{
    username = prompt("Benutzer: ");
    password = prompt("Passwort: ");
    if(username == User.Username && password == User.Passwort){
        alert("Login erfolgreich");
    }
    else if(username != User.Username && password == User.Passwort){
        alert("Username ist nicht korrekt");
    }
    else if(username == User.Username && password != User.Passwort){
        alert("Passwort ist nicht korrekt");
    }
    else if(username != User.Username && password != User.Passwort){
        alert("Username und Passwort sind nicht korrekt");
    }
}while(username != User.Username || password != User.Passwort);
