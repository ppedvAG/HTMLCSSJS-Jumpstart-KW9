function dom(){
    let h1 = document.createElement("h1"); //Wir erstellen das Element mit dem h1-Tag
    h1.innerText = "Hallo DOM"; //Das Element hat durch node.innerText hat folgenden Inhalt: 
    document.body.appendChild(h1); //Das Node (Element) wird im <body>-Tag platziert
    
    let p = document.createElement("p"); //Dasselbe, wie bei h1, geschieht mit p
    p.innerText = "Beliebiger Text...."
    document.body.appendChild(p);

    let div = document.createElement("div"); //Wir stellen ein Element mit einem <div>-Tag her
    document.body.appendChild(div); //Wir fügen div dem body als Child hinzu

    let ul = document.createElement("ul");
    //Durch Schleife erstellen wir sechs Elemente mit dem <li>-Tag her und fügen sie unter ul hinzu
    for(let i = 1; i < 7; i++){
        let li = document.createElement("li");
        li.innerText = "Ein Unterpunkt: " + i;
        ul.appendChild(li);
    }
    div.appendChild(ul);

    let img = document.createElement("img");
    img.setAttribute("alt", "Ein Bild"); //Durch setAttribute können wir die Attribute unserer Elemente festlegen
    img.setAttribute("src", "https://via.placeholder.com/250x250");
    div.appendChild(img);
}